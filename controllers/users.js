import { v4 as uuidv4 } from "uuid";

// Empty array that will hold all user objects
let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    // req.body is the contents of the post request
    const user = req.body;

    // Creates new object with all the properties of users and an 'id' of 'uuidv4()'
    // This push method will add the user to the users array
    users.push({ ...user, id: uuidv4() });

    // Sends a message with confirmation that a user was added
    res.send(`User with the username ${user.firstName} added to the database`);
};

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} has been deleted.`);
};

export const editUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
};
