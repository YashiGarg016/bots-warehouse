import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";


export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if(!isAuthenticated) return null;

  const baseLink = "px-3 py-1 rounded-md text-sm font-semibold text-gray-800 transition-all duration-150 " +
    "hover:bg-white hover:text-teal-500 hover:shadow-sm hover:scale-105";

  return (
    <nav className="w-full bg-teal-400 text-white px-4 md:px-6 py-3 flex items-center">
        

        <button onClick={() => navigate("/dashboard")} className="font-semibold text-lg mr-8 hover:scale-105 transition-transform duration-105">BOT WAREHOUSE</button>

        <div className="flex-1" />

        <div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
            <NavLink to="/dashboard"
          className={({ isActive }) =>
            `${baseLink} ${
              isActive ? "bg-white text-teal-500 shadow-sm" : ""
            }`
          }>Overview</NavLink>
            <NavLink to="/bots" className={({ isActive }) =>
            `${baseLink} ${
              isActive ? "bg-white text-teal-500 shadow-sm" : ""
            }`
          }>Bot Status</NavLink>
            <NavLink to="/task-allocation" className={({ isActive }) =>
            `${baseLink} ${
              isActive ? "bg-white text-teal-500 shadow-sm" : ""
            }`
          }>Task Allocation</NavLink>
            <NavLink to="/task-queue" className={({ isActive }) =>
            `${baseLink} ${
              isActive ? "bg-white text-teal-500 shadow-sm" : ""
            }`
          }>Task Queue</NavLink>
            <NavLink to="/analytics" className={({ isActive }) =>
            `${baseLink} ${
              isActive ? "bg-white text-teal-500 shadow-sm" : ""
            }`
          }>Analytics</NavLink>
            {/* <NavLink to="/map" className={({ isActive }) =>
            `${baseLink} ${
              isActive ? "bg-white text-teal-500 shadow-sm" : ""
            }`
          }>Map</NavLink> */}

          {isAuthenticated && (
              <button
                onClick={handleLogout} className="ml-4 bg-white text-teal-500 text-sm font-semibold
                    px-4 py-1 rounded-full transition-all duration-150
                    hover:scale-105 hover:shadow-md hover:text-black">Sign Out</button>
            )}
            
            
        </div>
        
        </div>

        
        
    </nav>    
  );
}
