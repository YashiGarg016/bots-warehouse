import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import {PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid,  BarChart,
  Bar } from "recharts";
import { useSelector } from 'react-redux';


export default function Analytics() {
  const bots = useSelector((state) => state.bots.list);
  const allocation = useSelector((state) => state.tasks.allocation);
  const queue = useSelector((state) => state.tasks.queue);

  const totalBots = bots.length;

  const allTasks = [...allocation, ...queue];
  const totalAllocated = allocation.length;
  const totalInQueue = queue.length;

  const [queueHistory, setQueueHistory] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQueueHistory((prev) => {
        const next = [
          ...prev,
          {
            time: new Date().toLocaleDateString([], { minute: "2-digit", second: "2-digit" }),
            value: queue.length,
          },
        ];

        return next.slice(-10);
      });
    }, 3000);

    return () => clearInterval(intervalId);
          }, [queue.length]
  );
      

  const priorityCounts = allTasks.reduce(
    (acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1;
      return acc;
    }, {}
  );

  let priorityData;
  let PRIOIRTY_COLORS;

  if (allTasks.length === 0) {
    priorityData = [{name: "No tasks", value: 1}];
    PRIOIRTY_COLORS = ["#e5e7eb"];
  } else {
    priorityData = [
      { name: "Low", value: priorityCounts.low || 0 },
      { name: "Medium", value: priorityCounts.medium || 0 },
      { name: "High", value: priorityCounts.high || 0 },
    ];

    PRIOIRTY_COLORS = ["#22c55e", "#3b82f6", "#ef4444"];
  }

  const statusCounts = bots.reduce(
    (acc, bot) => {
      acc[bot.status] = (acc[bot.status] || 0) + 1;
      return acc;
      },
    {}
  );

  const allocationVsQueue = [
    { name: "Allocated", value: totalAllocated },
    { name: "In Queue", value: totalInQueue },
  ];


  const statusData = [
  { name: "Idle", value: statusCounts.Idle || 0 },
  { name: "Busy", value: statusCounts.Busy || 0 },
  { name: "Charging", value: statusCounts.Charging || 0 },
  { name: "Error", value: statusCounts.Error || 0 },

];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="min-h-screen w-screen bg-slate-50">
            <Navbar />
            <main className="p-6 space-y-6">
                <h2 className="text-2xl font semibold mb-4">Analytics</h2>

                <div className='bg-white border rounded p-4 shadow-sm'>
                  <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mb-6'>
                    <div>
                      <h3 className='text-sm font-semibold text-gray-600'>
                      Total Bots  
                      </h3>
                      <p className='text-2xl font-bold mt-2'>{totalBots}</p>
                    </div>
                  

                  <div>
                    <h3 className='text-sm font-semibold text-gray-600'>
                      Tasks Allocated
                    </h3>
                    <p className='text-2xl font-bold mt-2'>{totalAllocated}</p>
                  </div>

                  <div>
                    <h3 className='text-sm font-semibold text-gray-600'>
                      Tasks in Queue
                    </h3>
                    <p className='text-2xl font-bold mt-2'>{totalInQueue}</p>
                  </div>
                </div>
              </div>    

                  {/* charts */}
                  <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>

                    {/* donut chart for bot status */}
                    <div className='bg-white border rounded  p-4 shadow-sm flex flex-col items-center'>
                      <h3 className='text-sm font-semibold text-gray-600 mb-2'>
                        Bots by Status
                      </h3>

                      <PieChart width={260} height={260}>
                        <Pie
                          data={statusData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={45}
                          label
                          >
                            {statusData.map((entry, index) => (
                              <Cell
                                key={entry.name}
                                fill={COLORS[index % COLORS.length]}
                              />

                            ))}

                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </div>

                    {/* donut chart for task priority */}
                    <div className='bg-white border rounded  p-4 shadow-sm flex flex-col items-center'>
                      <h3 className='text-sm font-semibold text-gray-600 mb-2'>
                        Tasks by Priority
                      </h3>
                      <PieChart width={260} height={260}>
                        <Pie
                          data={priorityData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          innerRadius={45}
                          label
                          >
                            {statusData.map((entry, index) => (
                              <Cell
                                key={entry.name}
                                fill={PRIOIRTY_COLORS[index % PRIOIRTY_COLORS.length]}
                              />

                            ))}

                        </Pie>
                        <Tooltip />
                        <Legend 
                          formatter={(value) => (
                            <span style={{ color: "#4b5563", fontSize: 12}}>{value}</span>
                          )}/>
                      </PieChart>
                    </div>

                    {/* line chart for queue length over time */}
                    <div className='bg-white border rounded  p-4 shadow-sm flex flex-col items-center'>
                      <h3 text-sm font-semibold text-gray-600 mb-2>Queue length over Time</h3>
                      <LineChart width={600} height={220} data={queueHistory}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKeey="time" tick={{ fontSize: 10 }} />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r:3 }} />
                      </LineChart>
                    </div>

                    {/* bar chart for allocated vs queued tasks */}
                    <div className='bg-white border rounded  p-4 shadow-sm flex flex-col items-center'>
                      <h3 className='text-sm font-semibold text-gray-600 mb-2'>Allocated vs In Queue</h3>
                      <BarChart width={600} height={220} data={allocationVsQueue}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="value" fill='#6366f1'/>
                      </BarChart>
                    </div>

                  </div>

                
            </main>
        </div>
  )
}

