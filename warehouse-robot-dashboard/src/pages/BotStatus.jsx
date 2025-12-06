// import { useEffect } from "react";
// import Navbar from "../components/Navbar";
// import { getMockBots } from "../utils/mockApi";
// import { useDispatch, useSelector } from "react-redux";
// import { setBots } from "../store/botsSlice";

// export default function BotStatus() {
//     const dispatch = useDispatch();
//     const bots = useSelector((state) => state.bots.list);

//     useEffect(() => {
//         //load
//         dispatch(setBots(getMockBots()));

//         //get refreshed
//         const intervalId = setInterval(() => {
//             dispatch(setBots(getMockBots()));
//         }, 10000);

//         //cleanup
//         return () => clearInterval(intervalId);
//     }, [dispatch]);

//     const getStatusClass = (BotStatus) => {
//         switch(BotStatus) {
//             case "Idle":
//                 return "bg-sky-100 text-sky-700";
            
//             case "Busy":
//                 return "bg-amber-100 text-amber-700";
            
//             case "Charging":
//                 return "bg-emerald-100 text-emerald-700";
            
//             case "Error":
//                 return "bg-rose-100 text-rose-700";  
            
//             default:
//                 return "bg-gray-100 text-gray-700";    
//         }
//     };
    
//     return (
//        <div className="min-h-screen w-screen bg-slate-50">
//             <Navbar />
//             <main className="px-4 md:px-8 py-6">
//                 <h2 className="text-ceenter text-xl font-bold mb-6 tracking-wide">BOT STATUS</h2>
//                 <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//                     {bots.map((bot) => (
//                         <div key={bot.id} className="bg-white border border-gray-100 roundedd-2xl p-5 shadow-sm flex flex-col gap-3" >
//                             <h3 className="font-semibold text-lg mb-2">{bot.name}</h3>
//                             <p>Battery: {bot.battery}%</p>
//                             <p>Speed: {bot.speed} m/s</p>
//                             <p>Status: {bot.status}</p>
//                             <p>Current task: {bot.currentTask || "No task"}</p>
//                         </div>
//                     ))}
//                 </div>
//             </main>
//         </div>
//     );
// }   

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getMockBots } from "../utils/mockApi";
import { useDispatch, useSelector } from "react-redux";
import { setBots } from "../store/botsSlice";

export default function BotStatus() {
  const dispatch = useDispatch();
  const bots = useSelector((state) => state.bots.list);


  useEffect(() => {
    dispatch(setBots(getMockBots()));

    const intervalId = setInterval(() => {
      dispatch(setBots(getMockBots()));
    }, 10000);

    return () => clearInterval(intervalId);
  }, [dispatch]);


  const getStatusClasses = (status) => {
    switch (status) {
      case "Idle":
        return "bg-emerald-100 text-emerald-700";
      case "Busy":
        return "bg-amber-100 text-amber-700";
      case "Charging":
        return "bg-sky-100 text-sky-700";
      case "Error":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />
      
      <main className="px-4 md:px-8 py-6">
        <h2 className="text-center text-xl font-bold mb-6 tracking-wide">
          BOT STATUS
        </h2>

        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {bots.map((bot) => (
            
            <div
              key={bot.id}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3"
            >
              
              <div className="flex items-center justify-between">
                <div>
                  {/* <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Bot
                  </p> */}
                  <h3 className="font-semibold text-lg text-gray-900">
                    {bot.name}
                  </h3>
                </div>

                <span
                  className={
                    "px-3 py-1 rounded-full text-xs font-semibold " +
                    getStatusClasses(bot.status)
                  }
                >
                  {bot.status || "Unknown"}
                </span>
              </div>

              
              <div className="flex items-center justify-between text-xs mt-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Battery</span>
                  <span className="font-semibold text-gray-800">
                    {bot.battery}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Speed</span>
                  <span className="font-semibold text-gray-800">
                    {bot.speed} m/s
                  </span>
                </div>
              </div>

              
              <div className="mt-2 border-t border-gray-100 pt-3 text-xs">
                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-500 mb-1">Current Task</p>
                        <p className="font-semibold text-gray-800">
                            {bot.currentTask || "No Task"}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="text-gray-500 mb-1">Last Updated</p>
                        <p className="font-semibold text-gray-800">
                            {bot.lastUpdated ? new Date(bot.lastUpdated).toLocaleTimeString()
                            : "N/A"}
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
