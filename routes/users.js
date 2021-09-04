import express from "express";
import {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    editUser,
} from "../controllers/users.js";

// Initalize a router
const router = express.Router();

// All routes here will start with /users as indicated in line 13 in index.js
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", editUser);

export default router;
