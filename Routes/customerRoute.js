import express from "express"
import { loginController, registerController } from "../Controllers/customerController.js"
const router = express.Router()
router.route("/customer/register").post(registerController)
router.route("/customer/login").post(loginController)


export default router