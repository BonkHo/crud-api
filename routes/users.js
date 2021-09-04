import express from "express";
import { v4 as uuidv4 } from "uuid";

// Initalize a router
const router = express.Router();

let users = [];

// All routes here will start with /users as indicated in line 13 in index.js

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    // req.body is the contents of the post request
    const user = req.body;

    // Creates new object with all the properties of users and an 'id' of 'uuidv4()'
    // This push method will add the user to the users array
    users.push({ ...user, id: uuidv4() });

    // Sends a message with confirmation that a user was added
    res.send(`User with the username ${user.firstName} added to the database`);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} has been deleted.`);
});
export default router;
