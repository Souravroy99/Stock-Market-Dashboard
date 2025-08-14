import express from "express"
import { createCompany, getCompanies, getCompanyById } from "../controllers/company.controller.js"
const router = express.Router()

router.route("/companies").get(getCompanies)
router.route("/company/:id").get(getCompanyById) 
router.route("/company").post(createCompany)

export default router 