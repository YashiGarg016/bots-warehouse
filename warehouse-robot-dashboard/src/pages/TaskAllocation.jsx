// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import { useDispatch, useSelector } from "react-redux";
// import { setAllocation } from "../store/tasksSlice";

// export default function TaskAllocation() {
//   const dispatch = useDispatch();
//   const allocation = useSelector((state) => state.tasks.allocation);
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState("medium");

//   const handleAddTask = (e) => {
//     e.preventDefault();
//     if (!description.trim()) return;

//     const newTask = {
//       id: Date.now(),
//       description,
//       priority,
//     };

//     dispatch(setAllocation([...allocation, newTask]));
//     setDescription("");
//     setPriority("medium");
//   };
//   return (
//     <div className="min-h-screen w-screen bg-slate-50">
//       <Navbar />
//       <main className="px-4 md:px-8 py-6 bg-slate-50">
//         <h2 className="text-center text-xl font-bold mb-8 tracking-wide">
//           TASK ALLOCATION
//         </h2>
//         <div className="flex flex-col md:flex-row gap-8 justify-center">
//           <div className="w-full md:w-1/3 bg-teal-100 rounded-3xl px-6 py-6 shadow-sm">
//             <form onSubmit={handleAddTask} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-semibold mb-1">
//                   Task Description
//                 </label>
//                 <input
//                   className="w-full border rounded-lg px-3 py-2 text-sm"
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   placeholder="Some description"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold mb-1">
//                   Priority
//                 </label>
//                 <select
//                   className="w-full border rounded-lg px-3 py-2 text-sm bg-white"
//                   value={priority}
//                   onChange={(e) => setPriority(e.target.value)}
//                 >
//                   <option value="low">Low</option>
//                   <option value="medium">Medium</option>
//                   <option value="high">High</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-teal-400 text-white rounded-full text-sm font-semibold hover:scale-105 hover:shadow-md transition-all"
//               >
//                 Add Task
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 bg-teal-100 rounded-3xl px-6 py-6 shadow-sm">
//           <h3 className="text-center text-sm font-semibold mb-4">
//             ALLOCATED TASKS
//           </h3>
//           {allocation.length === 0 ? (
//             <p className="text-xs text-gray-600">No tasks yet.</p>
//           ) : (
//             <div className="flex flex-col gap-4">
//               {allocation.map((task) => (
//                 <div
//                   key={task.id}
//                   className="flex items-center justfy-between bg-white rounded-2xl px-5 py-3 shadow-sm"
//                 >
//                   <span className="text-sm font-semibold text-gray-800">
//                     {task.priority}
//                   </span>
//                   <span
//                     className={
//                       "px-4 py-1 rounded-full text-xs font-semibold" +
//                       (task.priority === "high"
//                         ? "bg-rose-100 text-rose-600"
//                         : task.priority === "medium"
//                           ? "bg-amber-100 text-amber-600"
//                           : "bg-lime-100 text-lime-600")
//                     }
//                   >
//                     {task.priority.chartAt(0).toUpperCase() +
//                       task.priority.slice(1)}{" "}
//                     priority
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setAllocation } from "../store/tasksSlice";

export default function TaskAllocation() {
  const dispatch = useDispatch();
  const allocation = useSelector((state) => state.tasks.allocation);
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newTask = {
      id: Date.now(),
      description,
      priority,
    };

    dispatch(setAllocation([...allocation, newTask]));
    setDescription("");
    setPriority("medium");
  };

  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />
      
      <main className="px-4 md:px-8 py-6 bg-slate-50">
        <h2 className="text-center text-xl font-bold mb-8 tracking-wide">
          TASK ALLOCATION
        </h2>

        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          
          <div className="w-full md:w-[380px] bg-teal-100 rounded-3xl px-6 py-6 shadow-sm">
            <form onSubmit={handleAddTask} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Task Description
                </label>
                <input
                  className="w-full border rounded-lg px-3 py-2 text-sm bg-white"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add a task description"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Priority
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 text-sm bg-white"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-400 text-white rounded-full text-sm font-semibold hover:scale-105 hover:shadow-md transition-all"
              >
                Add Task
              </button>
            </form>
          </div>

          {/* RIGHT CARD: allocated tasks (CHANGED STYLING + CARDS) */}
          <div className="w-full md:flex-1 bg-teal-100 rounded-3xl px-6 py-6 shadow-sm">
            <h3 className="text-center text-sm font-semibold mb-4">
              ALLOCATED TASKS
            </h3>
            {allocation.length === 0 ? (
              <p className="text-xs text-gray-600">
                No tasks yet.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {allocation.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between bg-white rounded-2xl px-5 py-3 shadow-sm"
                  >
                    <span className="text-sm font-semibold text-gray-800">
                      {task.description}
                    </span>
                    
                    <span
                      className={
                        "px-4 py-1 rounded-full text-xs font-semibold " +
                        (task.priority === "high"
                          ? "bg-rose-100 text-rose-600"
                          : task.priority === "medium"
                          ? "bg-amber-100 text-amber-600"
                          : "bg-lime-100 text-lime-600")
                      }
                    >
                      {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}{" "}
                     
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
