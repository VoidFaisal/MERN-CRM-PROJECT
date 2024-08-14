import { admin } from "../Controllers/adminController.js";
import express from "express"
const router = express.Router()

 router.route("/admin").get(admin)

 export default router