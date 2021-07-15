import styles from "./ButtonsPagination.module.css";

const ButtonsPagination = ({ start, end, handleNext, handlePrev, heroes }) => {
  return (
    <div className={styles.container}>
      {start < 20 ? (
        <button disabled className={styles.btnPrevDisabled}>
          Anterior
        </button>
      ) : (
        <button onClick={handlePrev} className={styles.btnPrev}>
          Anterior
        </button>
      )}
      <span className={styles.span}>
        {start === 0 ? 1 : start} - {end > heroes.length ? heroes.length : end}
      </span>
      {end > heroes.length ? (
        <button disabled className={styles.btnNextDisabled}>
          Siguiente
        </button>
      ) : (
        <button onClick={handleNext} className={styles.btnNext}>
          Siguiente
        </button>
      )}
    </div>
  );
};

export default ButtonsPagination;
