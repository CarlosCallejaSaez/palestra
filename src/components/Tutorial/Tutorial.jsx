import React, { useState } from 'react';
import classes from "./Tutorial.module.css"

const VideoSelector = () => {
  const [selectedExercise, setSelectedExercise] = useState('');

  const handleSelectChange = (event) => {
    setSelectedExercise(event.target.value);
  };

  const getVideoUrl = () => {
    switch (selectedExercise) {
      case 'benchPress':
        return <iframe width="370" height="315" src="https://www.youtube.com/embed/lwKeQoXk4mk?si=OIIjVeSSWz6wim0y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      case 'squat':
        return <iframe width="370" height="315" src="https://www.youtube.com/embed/eb4rKCM3BKM?si=i_H-7qTvONwjeFEG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      case 'pullOver':
        return <iframe width="370" height="315" src="https://www.youtube.com/embed/ZmijCSRBW5E?si=nFaeXk8H_o3T-7pL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
      default:
        return '';
    }
  };

  return (
    <div className={classes.container}>
      <label htmlFor="exerciseSelect">Select an exercise to watch a tutorial about it </label>
      <select id="exerciseSelect" onChange={handleSelectChange} value={selectedExercise}>
        <option value="">Select an exercise</option>
        <option value="benchPress">Bench Press</option>
        <option value="squat">Squat</option>
        <option value="pullOver">Pull Over</option>
      </select>

      {selectedExercise && (
        <div>
          <h2>In the video below you can see how to {selectedExercise}</h2>
          {getVideoUrl()}
        </div>
      )}
    </div>
  );
};

export default VideoSelector;