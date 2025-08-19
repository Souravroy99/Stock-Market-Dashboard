import { Company } from "../models/company.model.js"
 
export const getCompanies = async(req, res) => {
    try {
        // If we just need to read data then 'lean()' is faster
        const companies = await Company.find().lean() 

        return res.status(200).json({message: "All companies successfully fetched", companies})  
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
} 

export const getCompanyById = async(req, res) => {
    try {
        const {id} = req.params    
        const companyDetails = await Company.findById(id)

        if(!companyDetails) return res.status(404).json({message: "Company not found!!"})
        return res.status(200).json({message: "Company details fetched successfully", companyDetails})
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createCompany = async(req, res) => {
    try {
        const {name, ticker, sector, logoUrl} = req.body    
        
        const existing = await Company.findOne({ticker})
        if(existing) return res.status(400).json({message: "Company already exists"})

        const newCompany = await Company.create({name, ticker, sector, logoUrl})
        
        return res.status(201).json({
            message: "Company created successfully",
            company: newCompany,
        });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}