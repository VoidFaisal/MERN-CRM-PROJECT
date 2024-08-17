import { creatLeadOpportunity, deleteLeadOpportunity, updateLeadOpportunity, viewLeadOpportunity } from "../Controllers/leadOpportunity.js"
import auth from "../Middleware/auth.js"
import express from "express"
const router = express.Router()

router.use(auth)

router.route("/addleadopportunity/:id").post(creatLeadOpportunity)
router.route("/viewleadopportunity/:id").get(viewLeadOpportunity)
router.route("/editleadopportunity/:id").put(updateLeadOpportunity)
router.route("/deleteleadopportunity/:id").delete(deleteLeadOpportunity)

export default router