import React, { use } from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { setAllocation, setQueue } from '../store/tasksSlice';
import { set } from 'react-hook-form';
import { useEffect } from 'react';



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

    // useEffect(() => {
    //     if(queue.length === 0) return;

    //     const intervalId = setInterval(() => {
    //         const newQueue = queue.slice(1);
    //         dispatch(setQueue(newQueue));
    //     }, 3000);


    //     return () => clearInterval(intervalId);
    // }, [queue, dispatch])
    
    return (
    <div className="min-h-screen w-screen bg-slate-50">
            <Navbar />
            <main className="p-6">
                <h2 className="text-2xl font semibold mb-4">Task Queue</h2>
                
                {/* this section for allocated tasks */}

                <section className="bg-white border rounded p-4 max-w-xl">
                    <h3 className="font-semibold mb-2">Tasks yet to be allocated</h3>
                    {allocation.length == 0 ? (
                        <p className="text-sm text-gray-600">No tasks to allocate.</p>)
                    : (
                        <ul className='space-y-1 text-sm'>
                            {allocation.map((task) => (
                                <li key={task.id} className='border-b pb-1 last:border-b-0 flex justify-between items-center'>
                                    <span>
                                        {task.description}{' '}
            
                                        <span className='text-xs text-grat-500'>
                                            ({task.priority})
                                        </span>
                                    </span>
                                    <button
                                        className='text-xs px-2 py-1 bg-blue-600 text-white rounded'
                                        onClick={() => handleAddToQueue(task)}
                                    >
                                        Add to Queue

                                    </button>
                                </li>
                            ))}
                        </ul>

                    )}
                </section>

                {/* this section for queued tasks */}
                <section className='bg-white border rounded p-4 max-w-xl'>
                    <h3 className='font-semibold mb-2'>Task Queue</h3>
                    {queue.length == 0 ? (
                        <p className='text-sm texxt-grat-600'>Queue is empty.</p>
                    ) : (
                        <ul className='space-y-1 text-sm'>
                            {queue.map((task) => (
                                <li key={task.id} className='border-b pb-1 last:border-b-0'>
                                    {task.description}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </main>
        </div>
    );
}

