const User = require('../models/user');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

class UserController {

    static home = (req, res) => {
        return res.status(200).json(req.userData);
    }

    // Method to validate user input from registration point.
    static validateCreateUserInput() {
        // Simple validation - could be expanded further.
        return [
            check('name', 'Name is required').exists(),
            check('email', 'Email address is required').exists(),
            check('password', 'Password is required').exists()
        ];
    }

    static createUser = (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors.array() });
        }

        // Encrypt the password
        req.body.password = md5(req.body.password);
        new User().create(req.body).execute()
        .then(result => {
            return res.status(200).json({
                status: 200,
                data: result
            })
        })
        .catch(err => {
            console.log("Error creating a user:", err);
        })
    }


    // Method to validate user input from login point.
    static validateLoginUserInput() {
        // Simple validation - could be expanded further.
        return [
            check('email', 'Email address is required').exists(),
            check('password', 'Password is required').exists()
        ];
    }

    static loginUser = (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ status: 400, message: errors.array() });
        }

        new User().read(['id','name','email']).where({email: req.body.email, password: md5(req.body.password)}).execute()
        .then(result => {
            if (result.length > 0) {
                // console.log(result);
                const payload = {
                    id: result[0].id,
                    name: result[0].name,
                    email: result[0].email
                }
                const token = jwt.sign(payload,process.env.JWT_KEY, {expiresIn:"1h"});
                return res.status(200).json({
                    status: 200,
                    message: "Authentication successful",
                    data: {token: token}
                });
            }
            return res.status(401).json({
                status: 401,
                message: "Invalid login details"
            })
            
        })
        .catch(err => {
            console.log("Error creating a user:", err);
            return res.status(500).json({
                status: 500,
                message: "We're unable to process your request. Please try logging in again"
            });
        })
    }

}

module.exports = UserController;