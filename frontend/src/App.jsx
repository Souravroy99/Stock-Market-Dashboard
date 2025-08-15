// App.jsx
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [stockData, setStockData] = useState(null);
  const [metrics, setMetrics] = useState(null);

  // Fetch companies
useEffect(() => {
  fetch("http://localhost:5000/api/companies")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched companies:", data);
      // Adjust based on API structure
      setCompanies(data.companies || []); 
    })
    .catch(err => console.error(err));
}, []);


  // Fetch stock data when a company is selected
  useEffect(() => {
    if (!selectedCompany) return;

    fetch(`http://localhost:5000/api/stock/${selectedCompany._id}`)
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data.metrics);
        setStockData(data.data); // we'll make backend send this
      })
      .catch((err) => console.error(err));
  }, [selectedCompany]);

  const chartData = {
    labels: stockData ? stockData.map((d) => new Date(d.date).toLocaleDateString()) : [],
    datasets: [
      {
        label: "Closing Price",
        data: stockData ? stockData.map((d) => d.close) : [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Companies</h2>
        {companies.map((c) => (
          <button
            key={c._id}
            onClick={() => setSelectedCompany(c)}
            className={`block w-full text-left px-3 py-2 rounded mb-2 ${
              selectedCompany?._id === c._id ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="flex-1 p-6">
        {selectedCompany ? (
          <>
            <h1 className="text-2xl font-bold mb-4">{selectedCompany.name}</h1>

            {/* Metrics */}
            {metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <MetricCard title="52 Week High" value={metrics["52WeekHigh"]} />
                <MetricCard title="52 Week Low" value={metrics["52WeekLow"]} />
                <MetricCard title="Avg Vol (30D)" value={metrics.averageVolume30Days} />
                <MetricCard title="SMA 20" value={metrics.SMA20} />
              </div>
            )}

            {/* Chart */}
            {stockData ? (
              <Line data={chartData} />
            ) : (
              <p className="text-gray-500">Loading chart...</p>
            )}
          </>
        ) : (
          <p className="text-gray-500">Select a company to view data</p>
        )}
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <p className="text-lg font-semibold">{Number(value).toFixed(2)}</p>
    </div>
  );
}