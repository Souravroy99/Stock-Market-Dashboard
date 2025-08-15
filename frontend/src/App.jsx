import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import StockChart from "./components/StockChart";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/companies")
      .then(res => res.json())
      .then(data => setCompanies(data.companies))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (!selectedCompany) return;

    fetch(`http://localhost:5000/api/stock/${selectedCompany._id}`)
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