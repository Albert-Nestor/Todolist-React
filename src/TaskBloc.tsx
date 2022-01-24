import { cardMediaClasses, Checkbox } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react';
import { Task } from './App';

export interface TaskBlocProps{
    task: Task,
    callback: Function
}

export default function TaskBloc(props: TaskBlocProps) {

    const [task, setTask] = useState<Task>(props.task);

    useEffect(()=>{
        console.log(task)
    },[task])

    const onHandleChangeDescription = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            task.description = event.target.value
            setNewTask(task)
    }

    const onHandleChangeDone = (event: React.ChangeEvent<HTMLInputElement>) => {
        task.done = event.target.checked
        console.log(event.target.checked)
        setNewTask(task)
}

    const setNewTask = (task : Task) => {
        setTask({...task})
        props.callback(task)
    }

    function isDone(props: TaskBlocProps) : JSX.Element {
            return(
            <div>
                <Checkbox defaultChecked={task.done} 
                onChange={e => onHandleChangeDone(e)}/>
            </div>)
    }

    return(
            <TableRow key={props.task.id}>
                <TableCell>  
                    {props.task.id}
                </TableCell>
                <TableCell>
                <TextField id="standard-basic"
                label="Description" variant="standard"
                fullWidth={true}
                value={task.description}
                onChange={e => onHandleChangeDescription(e)}
                placeholder='What are we doing today?'
                />
                    
                </TableCell>
                <TableCell>{isDone(props)}</TableCell>
            </TableRow>
    );
};