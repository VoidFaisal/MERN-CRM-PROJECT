import express from "express"
import { createCustomerLog, deleteCustomerLog, readCustomerLog, updateCustomerLog,readSingleCustomerLog } from "../Controllers/customerLogController.js"
import auth from "../Middleware/auth.js"
const router = express.Router()

router.use(auth)

router.route('/addcustomerlog').post(createCustomerLog)
router.route('/viewcustomerlog').get(readCustomerLog)
router.route('/viewonecustomerlog/:id').get(readSingleCustomerLog)
router.route('/editcustomerlog/:id').put(updateCustomerLog)
router.route('/deletecustomerlog/:id').delete(deleteCustomerLog)

export default router