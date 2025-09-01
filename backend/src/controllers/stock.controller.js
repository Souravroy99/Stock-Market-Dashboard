import { Company } from "../models/company.model.js";
import { StockData } from "../models/stock.model.js";

export const createStockData = async (req, res) => {
    try {
        const { date, open, high, low, close, volume } = req.body;
        const { companyId } = req.params

        const companyExists = await Company.findById(companyId);
        if (!companyExists) {
            return res.status(400).json({ message: "Company not found!" });
        }

        const newStockData = await StockData.create({
            companyId, date, open, high, low, close, volume
        });

        return res.status(201).json({
            message: "Stock data added successfully",
            stockData: newStockData
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getStockDataByCompany = async (req, res) => {
    try {
        const { companyId } = req.params;

        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const data = await StockData.find({ companyId, date: { $gte: oneYearAgo } }).sort({ date: 1 });

        if (data.length === 0) {
            return res.status(404).json({ message: "No stock data found" });
        }

        // 52-week high/low
        const high52 = Math.max(...data.map(d => d.high));
        const low52 = Math.min(...data.map(d => d.low));

        // Average (last 30 days)
        const last30 = data.slice(-30);
        const avgVolume = last30.reduce((sum, d) => sum + d.volume, 0) / last30.length;


        // Simple Moving Average (SMA) - 20 days
        const last20 = data.slice(-20);
        const sma20 = last20.reduce((sum, d) => sum + d.close, 0) / last20.length ;

        return res.status(200).json({
            message: "Metrics and data fetched successfully",
            metrics: {
                "52WeekHigh": high52,
                "52WeekLow": low52,
                averageVolume30Days: avgVolume,
                SMA20: sma20
            },
            data
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
