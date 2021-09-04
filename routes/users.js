import express from "express";

// Initalize a router
const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24,
    },
];

// All routes here will start with /users as indicated in line 13 in index.js

// Get method
router.get("/", (req, res) => {
    res.send(users);
});

// Post method
router.post("/", (req, res) => {
    // req.body is the contents of the post request
    const user = req.body;
    // This push method will add the user to the users array
    users.push(user);
    // Sends a message with confirmation that a user was added
    res.send(`User with the username ${user.firstName} added to the database`);
});

export default router;
