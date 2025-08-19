import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import StockChart from "./components/StockChart";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch("https://stock-market-dashboard-backend.onrender.com/api/companies")
      .then(res => res.json())
      .then(data => setCompanies(data.companies))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (!selectedCompany) return;

    fetch(`https://stock-market-dashboard-backend.onrender.com
/api/stock/${selectedCompany._id}`)
      .then(res => res.json())
      .then(data => {
        setMetrics(data.metrics);
        setStockData(data.data);
      })
      .catch(err => console.error(err));
  }, [selectedCompany]);


  return (
    <div className="flex h-screen">
      <Sidebar
        companies={companies}
        selectedCompany={selectedCompany}
        onSelect={setSelectedCompany}
      />
      
      <StockChart
        company={selectedCompany}
        metrics={metrics}
        stockData={stockData}
      />
    </div>
  );
}


// https://stock-market-dashboard-frontend.onrender.com