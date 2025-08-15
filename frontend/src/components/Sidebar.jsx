export default function Sidebar({ companies, selected, onSelect }) {
    return (
        <div className="w-64 bg-white shadow-lg overflow-y-auto">
            <h2 className="text-lg font-bold p-4 border-b">Companies</h2>
            <ul>
                {companies.map((company) => ( 
                    <li
                        key={company.symbol}
                        onClick={() => onSelect(company)}
                        className={`p-4 cursor-pointer hover:bg-gray-100 ${selected.symbol === company.symbol ? "bg-gray-200 font-semibold" : ""
                            }`}
                    >
                        {company.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
