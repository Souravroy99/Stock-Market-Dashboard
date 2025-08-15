export default function Sidebar({ companies, selectedCompany, onSelect }) {
    return (
        <div className="w-1/4 bg-gray-900 text-white p-4 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Companies</h2>
            {companies.map((c) => (
                <button
                    key={c._id}
                    onClick={() => onSelect(c)}
                    className={`block w-full text-left px-3 py-2 rounded mb-2 ${selectedCompany?._id === c._id ? "bg-blue-600" : "bg-gray-700"
                        }`}
                >
                    {c.name}
                </button>
            ))}
        </div>
    );
}