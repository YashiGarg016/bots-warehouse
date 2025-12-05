import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="font-semibold txt-lg text-gray-900">Warehouse Bots</div>
        <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/dashboard" className="text-gray-800 hover:text-blue-600">Overview</Link>
            <Link to="/bots" className="text-gray-800 hover:text-blue-600">Bot Status</Link>
            <Link to="/task-allocation" className="text-gray-800 hover:text-blue-600">Task Allocation</Link>
            <Link to="/task-queue" className="text-gray-800 hover:text-blue-600">Task Queue</Link>
            <Link to="/analytics" className="text-gray-800 hover:text-blue-600">Analytics</Link>
            <Link to="/map" className="text-gray-800 hover:text-blue-600">Map</Link>
            
        </div>
    </nav>    
  );
}

export default Navbar