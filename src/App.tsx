import { Button } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';

export interface Task{
      id: number,
      description: string,
      done: boolean;
};



function App() {

  const [tasks, setTasks] = useState<Array<Task>>([])

  const tasks2: Array<Task> = [];
  tasks2.push({
    id:0,
    description: "test1",
    done:false
  });
  tasks2.push({
    id:1,
    description: "test2",
    done:true
  });
  tasks2.push({
    id:2,
    description: "test3",
    done:false
  });
  tasks2.push({
    id:3,
    description: "test4",
    done:true
  });

  setTasks(tasks2)

  function newTask(){
      tasks2.push({
        id: 4,
        description: "new test",
        done:false
      })
      setTasks([...tasks2])
  }


  return (
    <div>
      <TaskList list={tasks}/>
      <Button variant="contained" onClick={newTask}>Contained</Button>
    </div>
  );
}

export default App;
