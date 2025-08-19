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

export default function StockChart({ company, metrics, stockData }) {
    // Show center message if no company is selected
    if (!company) {
        return ( 
            <div className="flex items-center justify-center w-full h-full text-center">
                <p className="text-gray-500 font-bold text-3xl">
                    Select a company to view data
                </p>
            </div>
        );
    }

    // Prepare chart data safely
    const chartData = {
        labels: stockData?.map((d) => new Date(d.date).toLocaleDateString()) || [],
        datasets: [
            {
                label: "Closing Price",
                data: stockData?.map((d) => d.close) || [],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.2,
            },
        ],
    };

    return (
        <div className="flex-1 flex flex-col p-6">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    className="w-12 h-12 object-contain"
                />
                <h1 className="text-2xl font-bold">{company.name}</h1>
            </div>

            {/* Metrics Section */}
            {metrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <MetricCard title="52 Week High" value={metrics["52WeekHigh"]} />
                    <MetricCard title="52 Week Low" value={metrics["52WeekLow"]} />
                    <MetricCard title="Avg Vol (30D)" value={metrics.averageVolume30Days} />
                    <MetricCard title="SMA 20" value={metrics.SMA20} />
                </div>
            )}

            {/* Chart */}
            <div className="flex-1 flex items-center justify-center">
                {stockData?.length ? (
                    <Line data={chartData} />
                ) : (
                    <p className="text-gray-500">Loading chart...</p>
                )}
            </div>
        </div>
    );
}

function MetricCard({ title, value }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 text-center">
            <h4 className="text-sm text-gray-500">{title}</h4>
            <p className="text-lg font-semibold">
                {value !== undefined && value !== null
                    ? Number(value).toFixed(2)
                    : "—"}
            </p>
        </div>
    );
}
