import React, {createContext, useState} from 'react';

export const TaskListContext = createContext();


const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: 'one', id: 1},
        {title: 'two', id: 2},
        {title: 'three', id: 3}
    ]);
    return (
        <div>
            <TaskListContext.Provider value={{tasks}}>
                {props.children}
            </TaskListContext.Provider>
        </div>
    ) 
}

export default TaskListContextProvider;