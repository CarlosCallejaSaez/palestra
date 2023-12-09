
import React, { useState, useEffect } from 'react';
 import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeFormat = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return (
    <div className="clock-container">
      <div className="clock">
        <p className="clock-text">
          It's {time.toLocaleTimeString([], timeFormat)}, the perfect time for exercising in our gym
          <span role="img" aria-label="weightlifting">
            🏋️‍♂️🏋️‍♀️
          </span>
        </p>
      </div>
    </div>
  );
};

export default Clock;
