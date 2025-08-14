import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function StockChart({ symbol }) {
    // Sample data (randomized for demo)
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const data = labels.map(() => Math.floor(Math.random() * 200) + 100);

    const chartData = {
        labels,
        datasets: [
            {
                label: `${symbol} Price ($)`,
                data,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: `${symbol} Weekly Prices` },
        },
    };

    return <Line data={chartData} options={options} />;
}
