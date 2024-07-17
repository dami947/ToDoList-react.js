import styles from './AddPanel.module.scss';
import { ShowInputButton } from './ShowInputButton';
import { Button } from './Button';

export function AddPanel({
  inputValue,
  setInputValue,
  handleAddTask,
  showInput,
  setShowInput,
  taskList,
}) {
  function handleShowInput() {
    setShowInput(true);
    console.log(showInput);
  }

  function nameOfTask() {
    const taskCount = taskList.length;
    if (taskCount === 0) {
      return 'Brak zadań';
    } else if (taskCount === 1) {
      return '1 zadanie';
    } else if (taskCount >= 2 && taskCount <= 4) {
      return `${taskCount} zadania`;
    } else {
      return `${taskCount} zadań`;
    }
  }

  return (
    <div className={styles.addPanel}>
      <div className={styles.addPanelTop}>
        <div>
          <h1>Do Zrobienia</h1>
          <h2>
            <span>{nameOfTask()}</span>
          </h2>
        </div>
        {!showInput && (
          <ShowInputButton className={styles.showInputButton} onClick={handleShowInput}>
            +
          </ShowInputButton>
        )}
      </div>
      {showInput && (
        <div className={styles.addPanelBottom}>
          <input
            type="text"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value), console.log(inputValue);
            }}
          />
          <Button onClick={handleAddTask}>Dodaj</Button>
        </div>
      )}
    </div>
  );
}
