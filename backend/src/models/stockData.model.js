import mongoose from "mongoose";

const stockDataSchema = new mongoose.Schema(
    {
        companyId: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Company", 
            required: true 
        },
        date: {  
            type: Date, 
            required: true 
        },
        open: Number,
        high: Number,
        low: Number,
        close: Number,
        volume: Number
    }, 
    { 
        timestamps: true
    }
);
 
export const StockData = mongoose.model("StockData", stockDataSchema);