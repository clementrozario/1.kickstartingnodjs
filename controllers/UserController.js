const User = require('../models/User');

class UserController {
    static async createUser(req, res) {
        try {
            const { name, phone, email } = req.body;
            await User.create({ name, phone, email });
            res.send('User created successfully.');
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send('Error creating user.');
        }
    }

    static async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send('Error fetching users.');
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = req.params.id;
            await User.destroy({ where: { id } });
            res.send('User deleted successfully.');
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send('Error deleting user.');
        }
    }
}

module.exports = UserController;
