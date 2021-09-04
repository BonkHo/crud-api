// const express = requires("express"); <- Old version of importing node packages
import express from "express";
// Route imports
import usersRoutes from "./routes/users.js";

const app = express();
// Initialize port for the server, capital name used since the port will never change
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", usersRoutes);

// Get request for the homepage with the callback function
app.get("/", (req, res) => res.send("Hello from the homepage."));

// Takes in a port and runs the callback function (second parameter)
app.listen(PORT, () =>
    console.log(`Server Running on port: http://localhost:${PORT}`)
);
