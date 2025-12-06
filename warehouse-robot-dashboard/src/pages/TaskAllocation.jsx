import { useState } from 'react'
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { setAllocation } from '../store/tasksSlice';

export default function TaskAllocation() {
    const dispatch = useDispatch();
    const allocation = useSelector((state) => state.tasks.allocation);
    const [description, setDescription] = useState('');
    const[priority, setPriority] = useState('medium');

    const handleAddTask = (e) => {
        e.preventDefault();
        if(!description.trim()) return;

        const newTask = {
            id: Date.now(),
            description,
            priority,
        };

        dispatch(setAllocation([...allocation, newTask]));
        setDescription('');
        setPriority('medium');
    }
    return (
        <div className="min-h-screen w-screen bg-slate-50">
            <Navbar />
            <main className="p-6">
                <h2 className="text-2xl font semibold mb-4">Task Allocation</h2>
                <form 
                    onSubmit={handleAddTask}
                    className="bg-white border rounded p-4 space-y-3 max-w-md"
                >
                    <div>
                        <label className="block text-sm mb-1">Task Description</label>
                        <input 
                            className="w-full border rounded px-2 py-1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Some description"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Priority</label>
                        <select
                            className="w-full border rounded px-2 py-1"
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
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Add Task
                    </button>
                </form>

                <section className="bg-white border rounded p-4 max-w-xl">
                    <h3 className="font-semibold mb-2">Allocated Tasks</h3>
                    {allocation.length == 0 ? (
                        <p className="text-sm text-gray-600">No tasks yet.</p>
                    ) : (
                        <ul className="space-y-1 text-sm">
                            {allocation.map((task) => (
                                <li key={task.id} className="border-b- pb-1 last:border-b-0">
                                    <span className="font-medium">{task.description}</span>{''}
                                    <span className="text-xs text-gray-500">
                                        ({task.priority} priority)
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </main>
        </div>
  );
}

