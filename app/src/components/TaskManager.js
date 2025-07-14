import  { useState } from 'react';
import TaskList from './TaskLisst';
import AddTaskForm from './AddTaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Build Frontend App for Notes using React.js', completed: true },
    { id: 2, title: 'View list of all Tasks', completed: true },
    { id: 3, title: 'Add new Task using create Button', completed: true },
    {id: 4, title: 'Delete Feature', completed: true},
    {id: 5, title: 'Filters', completed: true}
  ]);
  const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    }
    if (filter === 'active') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="task-manager">
      <h1>Task Manager </h1>
      <AddTaskForm addTask={addTask} />
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskManager;