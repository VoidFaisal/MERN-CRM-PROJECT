import { admin,updateUser,deleteUser, createCustomer, updateCustomer, deleteCustomer,getSingleManagement,getSingleCustomer, filterCustomer } from "../Controllers/adminController.js";
import auth from "../Middleware/auth.js"
import express from "express"
const router = express.Router()

router.use(auth)

 router.route("/admin").get(admin)
 router.route("/admin/edit/:id").post(updateUser)
 router.route("/admin/delete/:id").post(deleteUser)
 router.route("/singlemanagement/:id").get(getSingleManagement)
 router.route("/addcustomer").post(createCustomer)
 router.route("/editcustomer/:id").put(updateCustomer)
 router.route("/deletecustomer/:id").delete(deleteCustomer)
 router.route("/singlecustomer/:id").get(getSingleCustomer)
 router.route("/filtercustomer").get(filterCustomer)

 export default router