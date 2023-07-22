const fs = require("fs");
const path = require("path");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody>>", parsedBody);
      const message = parsedBody.split("=")[1];

      // Append the new message to the file
      fs.appendFile("message.txt", message + "\n", (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Data written to file successfully!");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    // Read all messages from the file
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      const messages = data.split("\n").filter((msg) => msg.trim() !== "");

      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>EnterMessage</title></head>");
      res.write("<body>");
      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message">');
      res.write('<button type="submit">Send</button>');
      res.write("</form>");

      // Display existing messages
      if (messages.length > 0) {
        res.write("<ul>");
        messages.forEach((msg) => {
          res.write(`<li>${msg}</li>`);
        });
        res.write("</ul>");
      } else {
        res.write("<p>No messages yet.</p>");
      }

      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  }
};

module.exports = requestHandler;
