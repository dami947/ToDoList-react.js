import styles from './Button.module.scss';

export function Button({ className = styles.btn, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
