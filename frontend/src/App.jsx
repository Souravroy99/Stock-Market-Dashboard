import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import StockChart from "./components/StockChart";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Fetch companies from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/companies")
      .then((res) => {
        setCompanies(res.data);
        if (res.data.length > 0) setSelectedCompany(res.data[0]);
      })
      .catch((err) => {
        console.error("Error fetching companies:", err);
      });
  }, []);

  if (!selectedCompany) return <p className="p-4">No companies found</p>;

  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar
        companies={companies}
        selected={selectedCompany}
        onSelect={setSelectedCompany}
      />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">
          {selectedCompany.name} Stock Prices
        </h1>
        <StockChart symbol={selectedCompany.symbol} />
      </div>
    </div>
  );
}