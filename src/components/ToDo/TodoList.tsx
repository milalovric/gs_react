import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TodoItems } from "./TodoItems";
import "./TodoList.scss"; 

export const TodoList: FC = () => {
  const { category } = useParams<{ category: string }>();
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Load tasks for the selected category from localStorage or API
    const storedTasks = JSON.parse(localStorage.getItem(`tasks_${category}`) || '[]');
    setTasks(storedTasks);
  }, [category]);

  const addTask = () => {
    if (newTask.trim() !== '' && !tasks.includes(newTask)) {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask('');
      localStorage.setItem(`tasks_${category}`, JSON.stringify(updatedTasks));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const removeItem = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem(`tasks_${category}`, JSON.stringify(updatedTasks));
  };

  const isInputDisabled = newTask.trim() === '' || tasks.includes(newTask);

  return (
    <div className="todo-list">
      <h1>{category} - Todo List</h1>
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