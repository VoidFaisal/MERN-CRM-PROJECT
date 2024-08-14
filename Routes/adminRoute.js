import { admin,updateUser,deleteUser } from "../Controllers/adminController.js";
import auth from "../Middleware/auth.js"
import express from "express"
const router = express.Router()

 router.route("/admin").get(auth,admin)
 router.route("/admin/edit/:id").post(auth,updateUser)
 router.route("/admin/delete/:id").post(auth,deleteUser)

 export default router