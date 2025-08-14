import mongoose from "mongoose"

const companySchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            trim: true,
            required: true 
        },  
        ticker: { 
            type: String, 
            uppercase: true, 
            trim: true,
            unique: true,
            required: true, 
        },
        sector: String,
        logoUrl: String
    }, 
    {
        timestamps: true
    }
)

export const Company =  mongoose.model("Company", companySchema);