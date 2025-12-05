import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Navbar from './components/Navbar';
import TaskAllocation from './pages/TaskAllocation';
import TaskQueue from './pages/TaskQueue';
import Analytics from './pages/Analytics';
import Map from './pages/Map';
import BotStatus from './pages/BotStatus';
import { useDispatch } from 'react-redux';
import { use, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setQueue } from './store/tasksSlice';


function App() {
  const dispatch = useDispatch();
  const queue = useSelector((state) => state.tasks.queue);

  useEffect(() => {
    if(queue.length === 0) return;

    const intervalId = setInterval(() => {
      const newQueue = queue.slice(1);
      dispatch(setQueue(newQueue));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [queue, dispatch]);
  
  return (
    <>
    {/* <Navbar /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/bots" element={<BotStatus />}/>
      <Route path="/task-allocation" element={<TaskAllocation />}/>
      <Route path="/task-queue" element={<TaskQueue />}/>
      <Route path="/analytics" element={<Analytics />}/>
      <Route path="/map" element={<Map/>}/>

    </Routes>
    </BrowserRouter></>
  );
}

export default App;