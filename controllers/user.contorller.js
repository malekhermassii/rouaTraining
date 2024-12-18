const User = require("../models/user.model")
const bcrypt = require("bcrypt")
// signup
exports.SignUp = async (req, res) => {
    try {
        // Validation
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
                message: "Email and password are required."
            });
        }

        // Check if the email is already used
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send({
                message: "Email already registered."
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        // Create and save the new user
        const newUser = new User({
            email: req.body.email,
            password: hash
        });

        const savedUser = await newUser.save();
        return res.status(201).send(savedUser);

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Server error."
        });
    }
};
// malak@gmail.com 
// salt [123456yuiop;zsdfgyhuijkl;èéfgcd7uejdkjgeytfeyevgevgfehgdvdgfcdgd]
// hashing = salt + pass
// login
// logout
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return res.status(200).json({ message: "Authentication successful" });
        } else {
            return res.status(400).json({ message: "Authentication failed" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server error while logging in" });
    }
};
// logout 
// session (authentication) (login) , cookies 
exports.logout = (req , res)=>{
        req.session.user = null ; 
        // isAuthenticated (true)
        req.session.isAuthenticated = false ;
        res.redirect("/")
        return res.status(200).json({message : "logout successful"})

}