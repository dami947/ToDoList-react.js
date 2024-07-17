import { useState } from 'react';
import './App.scss';
import { AddPanel } from './Components/AddPanel';
import { TaskList } from './Components/TaskList';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [taskList, setTaskList] = useState([
    { task: 'Umyć auto', id: 1, status: false },
    { task: 'Zrobić zakupy', id: 2, status: false },
  ]);

  function handleAddTask() {
    if (!inputValue) return;
    setTaskList(prevState => [
      ...prevState,
      { task: inputValue, id: Math.random(), status: false },
    ]);
    console.log(taskList);
    setInputValue('');
    setShowInput(false);
  }

  function deleteTask(id) {
    const updateTaskArray = taskList.filter(task => task.id !== id);
    console.log(id);
    setTaskList(updateTaskArray);
  }

  function doneTask(id) {
    const updatedTasks = taskList.map(task => (task.id === id ? { ...task, status: true } : task));
    setTaskList(updatedTasks);
  }

  return (
    <div className="todoApp">
      <AddPanel
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTask={handleAddTask}
        showInput={showInput}
        setShowInput={setShowInput}
        taskList={taskList}
      />
      <TaskList taskList={taskList} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  );
}

export default App;
