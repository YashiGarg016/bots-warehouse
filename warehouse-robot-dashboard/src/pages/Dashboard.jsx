import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const bots = useSelector((state) => state.bots.list);
  const allocation = useSelector((state) => state.tasks.allocation);
  const queue = useSelector((state) => state.tasks.queue);

  const totalBots = bots.length;
  const idleBots = bots.filter((b) => b.status === "Idle").length;
  const errorBots = bots.filter((b) => b.status === "Error").length;

  const activeTasks = queue.length;
  const pendingTasks = allocation.length + queue.length;

  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />
      <main className="px-4 md:px-8 py-6">
        <h2 className="text-center text-xl font-bold mb-8 tracking-wide">
          DASHBOARD
        </h2>

        {/* Hero section with video background + KPIs overlay */}
        <section className="relative overflow-hidden rounded-2xl shadow-md">
          {/* Background video */}
          <div className="h-[550px] w-full">
            <video
              src="/robots.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark overlay + KPIs */}
          <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/35">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full max-w-5xl">
              {[
                { label: "Total Bots", value: totalBots },
                { label: "Active Tasks", value: activeTasks },
                { label: "Idle Bots", value: idleBots },
                { label: "Error Bots", value: errorBots, error: true },
                { label: "Pending Tasks", value: pendingTasks },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md"
                >
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {item.label}
                  </h3>
                  <p
                    className={
                      "text-2xl font-bold mt-1 " +
                      (item.error ? "text-red-600" : "text-gray-900")
                    }
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
