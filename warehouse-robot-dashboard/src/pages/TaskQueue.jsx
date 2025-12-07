import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { setAllocation, setQueue } from '../store/tasksSlice';

export default function TaskQueue() {
    const dispatch = useDispatch();
    const allocation = useSelector((state) => state.tasks.allocation);
    const queue = useSelector((state) => state.tasks.queue);

    const handleAddToQueue = (task) => {
        const newAllocation = allocation.filter((t) => t.id !== task.id);
        const newQueue = [...queue, task];

        dispatch(setAllocation(newAllocation));
        dispatch(setQueue(newQueue));
    };

    
    return (
    <div className="min-h-screen w-screen bg-slate-50">
            <Navbar />
            <main className="px-4 md:px-8 py-6">
                <h2 className="text-center text-xl font-bold mb-8 tracking-wide">TASK QUEUE</h2>
                
                {/* this section for allocated tasks */}

                <div className='flex flex-col md:flex-row gap-8 justify-center items-start'>
                    <section className="w-full md:w-1/2 bg-teal-100 rounded-3xl px-6 py-6 shadow-sm">
                    <h3 className="text-center text-sm font-semibold mb-4">ALLOCATED TASKS</h3>
                    {allocation.length == 0 ? (
                        <p className="text-sm text-gray-600">No tasks to allocate.</p>)
                    : (
                        <div className='flex flex-col gap-4'>
                            {allocation.map((task, index) => (
                                <div key={task.id} className='flex items-center justify-between bg-white rounded-2xl px-5 py-3 shadow-sm'>
                                    <div className='flex items-center gap-3'>
                                        <span
                                            className={
                                                'w-3 h-3 rounded-full ' + 
                                                (task.priority ==="high"
                                                    ? 'bg-red-400'
                                                    : task.priority === "medium"
                                                    ? 'bg-amber-400'
                                                    : 'bg-lime-400'
                                                )
                                            } />
                                            <p className='text-sm text-gray-800'>
                                                {task.description}
                                            </p>
                                    </div>

                                    <button
                                        className='text-xs px-4 py-1 bg-teal-400 text-white rounded-full font-semibold hover:scale-105 hover:shadow-md transition-all'
                                        onClick={() => handleAddToQueue(task)}
                                    >
                                        Add to Queue

                                    </button>
                                </div>
                            ))}
                        </div>

                    )}
                </section>

                {/* this section for queued tasks */}
                <section className='w-full md:w-1/2 bg-teal-100 rounded-3xl px-6 py-6 shadow-sm'>
                    <h3 className='text-center text-sm font-semibold mb-4'>TASK QUEUE</h3>
                    {queue.length == 0 ? (
                        <p className='text-sm text-gray-600'>Queue is empty.</p>
                    ) : (
                        <div className='flex flex-col gap-4'>
                            {queue.map((task) => (
                                <div key={task.id} className='flex items-center justify-between bg-white rounded-2xl px-5 py-3 shadow-sm'>
                                    <p className='text-sm text-gray-800'>{task.description}</p>
                                    <span className={
                                        'px-4 py-1 rounded-full text-xs font-semibold ' + 
                                        (task.priority === "high"
                                        ? "bg-rose-100 text-rose-600"
                                        : task.priority === "medium"
                                        ? "bg-amber-100 text-amber-600"
                                        : "bg-lime-100 text-lime-600")
                                    }>
                                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                </div>

                
            </main>
        </div>
    );
}

