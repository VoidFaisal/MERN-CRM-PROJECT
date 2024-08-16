import { admin,updateUser,deleteUser, createCustomer, updateCustomer, deleteCustomer,getSingleManagement,getSingleCustomer } from "../Controllers/adminController.js";
import auth from "../Middleware/auth.js"
import express from "express"
const router = express.Router()

 router.route("/admin").get(auth,admin)
 router.route("/admin/edit/:id").post(auth,updateUser)
 router.route("/admin/delete/:id").post(auth,deleteUser)
 router.route("/singlemanagement/:id").get(auth,getSingleManagement)
 router.route("/addcustomer").post(auth,createCustomer)
 router.route("/editcustomer/:id").put(auth,updateCustomer)
 router.route("/deletecustomer/:id").delete(auth,deleteCustomer)
 router.route("/singlecustomer/:id").get(auth,getSingleCustomer)

 export default router