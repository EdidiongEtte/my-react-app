import { useState } from 'react';

function TaskList() {

    const [tasks, setTasks] = useState([]);

    const [inputValue,setInputValue] = useState('');

    const addTask = () => {
        if (inputValue.trim() === '') return;
        console.log("Adding task:", inputValue);
        setTasks([...tasks, inputValue]);
        setInputValue('');
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_,i) => i !== index);
        setTasks(newTasks);
    };

    return(
        <div>
            <h2>My Task List</h2>
            {/*Input box and button */}
            <input 
            type="text"
            placeholder= "Enter Task"
            value={inputValue}
            onChange ={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={addTask}>Add</button>

            {/* Display all tasks */}
            <ul>
                {tasks.map((task, index) => (
                    <li key = {index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TaskList;