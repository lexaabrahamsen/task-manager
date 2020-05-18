import React, {createContext, useState} from 'react';

export const TaskListContext = createContext();


const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {task: 'one', id: 1},
        {task: 'two', id: 2},
        {task: 'three', id: 3}
    ]);
    return (
        <div>
            <TaskListContextProvider  value={{tasks}}>
                {props.children}
            </TaskListContextProvider>
        </div>
    ) 
}

export default TaskListContextProvider;