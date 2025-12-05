import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getMockBots } from "../utils/mockApi";
import { useDispatch, useSelector } from "react-redux";
import { setBots } from "../store/botsSlice";

export default function BotStatus() {
    const dispatch = useDispatch();
    const bots = useSelector((state) => state.bots.list);

    useEffect(() => {
        //load
        dispatch(setBots(getMockBots()));

        //get refreshed
        const intervalId = setInterval(() => {
            dispatch(setBots(getMockBots()));
        }, 10000);

        //cleanup
        return () => clearInterval(intervalId);
    }, [dispatch]);
    
    return (
       <div className="min-h-screen w-screen bg-slate-50">
            <Navbar />
            <main className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Bot Status</h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {bots.map((bot) => (
                        <div key={bot.id} className="bg-white border rounded p-4 shadow-sm" >
                            <h3 className="font-semibold text-lg mb-2">{bot.name}</h3>
                            <p>Battery: {bot.battery}%</p>
                            <p>Speed: {bot.speed} m/s</p>
                            <p>Status: {bot.status}</p>
                            <p>Current task: {bot.currentTask || "No current task"}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}            