import { useEffect } from "react";
import Navbar from "../components/Navbar";
import {  useDispatch, useSelector } from "react-redux";
import setQueue from "../store/tasksSlice";

export default function Dashboard() {

    const bots = useSelector((state) => state.bots.list);
    const allocation = useSelector((state) => state.tasks.allocation);
    const queue = useSelector((state) => state.tasks.queue);
    const dispatch = useDispatch();

    const totalBots = bots.length;
    const idleBots = bots.filter((b) => b.status ==='Idle').length;
    const errorBots = bots.filter((b) => b.status ==='Error').length;

    const activeTasks = queue.length;
    const pendingTasks = allocation.length + queue.length;

    // useEffect(() => {
    //     if(queue.length === 0) return;

    //     const intervalId = setInterval(() => {
    //         const newQueue = queue.slice(1);
    //         dispatch(setQueue(newQueue));
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, [queue, dispatch]);

    return (
       <div className="min-h-screen w-screen bg-slate-50">
        <Navbar />
        <main className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                <div className="bg-white border rounded p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-grat-600">Total Bots</h3>
                    <p className="text-2xl font-bold mt-2">{totalBots}</p>
                </div>

                <div className="bg-white border rounded p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-grat-600">Active Tasks</h3>
                    <p className="text-2xl font-bold mt-2">{activeTasks}</p>
                </div>

                <div className="bg-white border rounded p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-grat-600">Idle Bots</h3>
                    <p className="text-2xl font-bold mt-2">{idleBots}</p>
                </div>

                <div className="bg-white border rounded p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-grat-600">Error Bots</h3>
                    <p className="text-2xl font-bold mt-2 text-red-600">{errorBots}</p>
                </div>

                <div className="bg-white border rounded p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-grat-600">Pending Tasks</h3>
                    <p className="text-2xl font-bold mt-2">{pendingTasks}</p>
                </div>
            </div>
        </main>
       </div>

    //testing redux here

    // <div className="min-h-screen bg-slate-50">
    //   <Navbar />
    //   <main className="p-6">
    //     <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
    //     <p className="text-gray-800 mb-2">{testValue}</p>
    //   </main>
    // </div>


    );

}