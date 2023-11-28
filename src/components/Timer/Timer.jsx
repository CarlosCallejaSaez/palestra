import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [restTime, setRestTime] = useState(30); 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(interval);
            setIsActive(false);
            alert('¡Let\'s go!');
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleRestTime = () => {
    setSeconds(restTime);
    setIsActive(false);
  };

  const incrementRestTime = () => {
    setRestTime((prevRestTime) => prevRestTime + 5);
  };

  const decrementRestTime = () => {
    setRestTime((prevRestTime) => (prevRestTime > 5 ? prevRestTime - 5 : prevRestTime));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.timer}> ⏰ {seconds} ⏰</h1>
      <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={handleRestTime}>Set Rest Time</button>
      <div className={styles['rest-time-container']}>
        <button onClick={incrementRestTime} className={styles['rest-time-button']}>+</button>
        <span className={styles['rest-time-value']}>{restTime} seconds </span>
        <button onClick={decrementRestTime} className={styles['rest-time-button']}>-</button>
      </div>
    </div>
  );
};

export default Timer;