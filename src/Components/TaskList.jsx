import { Button } from './Button';
import styles from './TaskList.module.scss';

export function TaskList({ taskList, deleteTask, doneTask }) {
  return (
    <ul className={styles.list}>
      {taskList.map(task => (
        <div key={task.id} className={`${styles.item} ${task.status && styles.done}`}>
          <li className={`${task.status ? styles.done : ''}`}>{task.task}</li>
          <div>
            {!task.status && <Button onClick={() => doneTask(task.id)}>Zrobione</Button>}
            <Button onClick={() => deleteTask(task.id)}>Usuń</Button>
          </div>
        </div>
      ))}
    </ul>
  );
}
