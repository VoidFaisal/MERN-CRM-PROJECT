import express from "express";
import { registerController,loginController } from "../Controllers/managementController.js";
const router  = express.Router();


router.route('/management/register').post(registerController)
router.route('/management/login').post(loginController)


export default router;