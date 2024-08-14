import { admin } from "../Controllers/adminController.js";
import auth from "../Middleware/auth.js"
import express from "express"
const router = express.Router()

 router.route("/admin").get(auth,admin)

 export default router