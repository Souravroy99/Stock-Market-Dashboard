export default function MetricCard({ title, value }) {
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