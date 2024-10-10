import express from "express";
import authenticateToken from "../middleware/AuthenticateToken.js";
import {createUser,getUser} from "../controllers/UserController.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", authenticateToken, getUser)


export default router;