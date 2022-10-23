const { User } = require ("../models/user");

//uset controller
module.exports = {
    //create user
    create: async(req, res) => {
        try {
            //create user
            const newUser = new User(req.body);
            //save user
            const user = await newUser.save();
            //check if user is saved
            if (user) {
                res.send(user);
            } else {
                res.send("user not saved");
            }
        }catch (error) {
            //send error
            res.status(400).send(error);
        }
    },
    //get all users
    getAll: async(req, res) => {
        try {
            //get all users
            const users = await User.find();
            //check if users exist
            if (users) {
                //send users
                res.send(users);
            } 
        } catch (error) {
            //send error
            res.status(400).send(error);
        }
    },
    //get user by id
    getById: async(req, res) => {
        try {
            //get user by id
            const user = await User.findById(req.params.id);
            //check if user exist
            if (user) {
                //send user
                res.send(user);
            } 
        } catch (error) {
            //send error
            res.status(400).send(error);
        }
    },
    //update user by id
    update: async(req, res) => {
        try {
            //update user by id
            const user = await User.findByIdAndUpdate(req.params.id, req.body);
            //check if user exist
            if (user) {
                //send user
                res.send(user);
            }else {
                res.send("user not updated");
            }
        } catch (error) {
            //send error
            res.status(400).send(error);
        }
    },
    //delete user by id
    delete: async(req, res) => {
        try {
            //delete user by id
            const user = await User.findByIdAndDelete(req.params.id);
            //check if user exist
            if (user) {
                //send user
                res.send(user);
            }
        } catch (error) {
            //send error
            res.status(400).send(error);
        }
    }
}
