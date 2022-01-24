import { Checkbox } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { Task } from './App';

export interface TaskBlocProps{
    task: Task
}

function isDone(props: TaskBlocProps) {
    if (props.task.done){
        return(
        <div>
            <Checkbox defaultChecked />
        </div>)
    }
    return(
        <div>
            <Checkbox/>
        </div>
    )
}

export default function TaskBloc(props: TaskBlocProps) {
    return(
            <TableRow key={props.task.id}>
                <TableCell>{props.task.id}</TableCell>
                <TableCell>{props.task.description}</TableCell>
                <TableCell>{isDone(props)}</TableCell>
            </TableRow>
    );
};