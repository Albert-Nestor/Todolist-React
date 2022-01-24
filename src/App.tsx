import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import TaskList from './TaskList';

export interface Task{
      id: number,
      description: string,
      done: boolean;
};

function App() {

  const [tasks, setTasks] = useState<Array<Task>>([])

        useEffect(()=>{
          const newTasks: Array<Task> = [];
          setTasks(newTasks)
    },[])

    useEffect(()=> {
      console.log(tasks)
    },[tasks])

  function newTask(){
      tasks.push({
        id: tasks.length+1,
        description: "new test",
        done:false
      })
      setTasks([...tasks])
  }

  const onTaskUpdate = (task: Task) => {
      for (let i = 0; i<tasks.length; i++) {
        if (tasks[i].id === task.id) {
          tasks[i] = task
          break
        }
      }
      setTasks([...tasks])
  }

  return (
    <div>
      <TaskList list={tasks} callback={onTaskUpdate}/>
      <Button variant="contained" onClick={newTask}>Contained</Button>
    </div>
  );
}

export default App;