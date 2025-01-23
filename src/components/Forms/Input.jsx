import styles from "./Input.module.css";

function Input({ label, type, name, value, setValue, onChange, onBlur, error }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input type={type} name={name} id={name} value={value} onChange={onChange} onBlur={onBlur} className={styles.input} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default Input;
