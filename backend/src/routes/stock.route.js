import express from "express"
import { createStockData, getStockDataByCompany } from "../controllers/stock.controller.js"
const router = express.Router()

router.route("/stock/:companyId").get(getStockDataByCompany)
router.route("/stock/:companyId").post(createStockData)

export default router