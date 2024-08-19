import { creatLead, deleteLead, updateLead, viewLead } from "../Controllers/leadManagementController.js"
import auth from "../Middleware/auth.js"
import express from "express"
const router = express.Router()

router.use(auth)

router.route("/addlead").post(creatLead)
router.route("/viewlead").get(viewLead)
router.route("/editlead/:id").put(updateLead)
router.route("/deletelead/:id").delete(deleteLead)

export default router