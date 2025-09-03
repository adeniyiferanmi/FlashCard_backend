import express from "express"
import { signInHandler, signup } from "../controllers/authController.js"
const authRouter = express.Router()

authRouter.post("/signup",signup)
authRouter.post("/signin",signInHandler)

export default authRouter