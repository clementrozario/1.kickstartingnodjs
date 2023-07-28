const path=require('path');

const express=require('express')
const bodyParser=require('body-parser');

const app=express();

const adminRoutes = require('./routes/admin')
const shopRoutes =require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRoutes);
app.use(shopRoutes);
// Contact Us route
app.get('/contactus', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
  });
  
  app.post('/contactus', (req, res) => {
    // Handle the form data here if needed
    res.redirect('/success');
  });
  
  // Success route
  app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
  });
 
app.use((req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));

});

app.listen(3000);

