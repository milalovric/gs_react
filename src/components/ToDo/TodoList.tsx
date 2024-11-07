import React, { FC, useState } from "react";
import { TodoItems } from "./TodoItems";
import "./TodoList.scss"; 

export const TodoList: FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '' && !tasks.includes(newTask)) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const removeItem = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const isInputDisabled = newTask.trim() === '' || tasks.includes(newTask);

  return (
    <div className="todo-list">
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Novi zadatak"
      />
      <button onClick={addTask} disabled={isInputDisabled} className="btn">
        Dodaj zadatak
      </button>
      <div>
        {tasks.map((task, index) => (
          <TodoItems 
            key={index} 
            todo={task} 
            onRemove={() => removeItem(index)} 
          />
        ))}
      </div>
    </div>
  );
};