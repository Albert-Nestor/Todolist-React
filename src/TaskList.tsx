import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import { Task } from './App';
import TaskBloc from './TaskBloc';

export interface TaskListProps{
    list: Array<Task>,
    callback: Function
}

export default function TaskList(props: TaskListProps) {
    return(
        <div>
            <TableContainer component={Paper} sx={{ width: '50%' }}>
                <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                          <TableCell sx={{ width: '15%' }}>Number</TableCell>
                          <TableCell sx={{ width: '70%' }}>Description</TableCell>
                          <TableCell sx={{ width: '15%' }}>Done</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      
                      {props.list.map((row) => (
                        <TaskBloc task={row} callback={props.callback}/>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
        </div>
    );
};