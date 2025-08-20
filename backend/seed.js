// import mongoose from "mongoose";
// import { Company } from "./src/models/company.model.js";
// import { StockData } from "./src/models/stock.model.js";
// import companies from "./companies.json" assert { type: "json" };
// import stockData from "./stockData.json" assert { type: "json" };

// const MONGO_URI = process.env.MONGO_URI

// const seed = async () => {
//     try {
//         await mongoose.connect(MONGO_URI);
//         console.log("✅ MongoDB connected");

//         // Clear old data
//         await Company.deleteMany({});
//         await StockData.deleteMany({});
//         console.log("🧹 Cleared existing collections");

//         // Insert companies
//         const insertedCompanies = await Company.insertMany(companies);
//         console.log(`🏢 Inserted ${insertedCompanies.length} companies`);

//         // Map ticker → ObjectId
//         const companyMap = {};
//         insertedCompanies.forEach(c => {
//             companyMap[c.ticker] = c._id;
//         });

//         // Replace companyTicker with companyId in stock data
//         const stockDataWithIds = stockData.map(d => ({
//             companyId: companyMap[d.companyTicker],
//             date: new Date(d.date),
//             open: d.open,
//             high: d.high,
//             low: d.low,
//             close: d.close,
//             volume: d.volume
//         }));

//         // Insert stock data
//         await StockData.insertMany(stockDataWithIds);
//         console.log(`📈 Inserted ${stockDataWithIds.length} stock data records`);

//         console.log("✅ Seeding completed successfully!");
//         process.exit();
//     } 
//     catch (err) {
//         console.error("❌ Error during seeding:", err);
//         process.exit(1);
//     }
// };

// seed();