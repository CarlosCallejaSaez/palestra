import React, { useState } from 'react';
import classes from "./GymExerciseTable.module.css"

const GymExerciseTable = () => {
  const [exerciseList, setExerciseList] = useState(generateRandomExercises());

  function generateRandomExercises() {
    const exercises = [];
    const exerciseNames = [
      'Squats',
      'Push-ups',
      'Lunges',
      'Plank',
      'Deadlifts',
      'Bench Press',
      'Pull-ups',
      'Leg Press',
      'Bicep Curls',
      'Tricep Dips',
      'Shoulder Press',
      'Crunches',
      'Russian Twists',
      'Calf Raises',
      'Hammer Curls',
      'Lat Pulldowns',
      'Leg Curls',
      'Dumbbell Rows',
      'Box Jumps',
    ];
    

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * exerciseNames.length);
      const newExercise = {
        name: exerciseNames[randomIndex],
        sets: Math.floor(Math.random() * 4) + 1,
        reps: Math.floor(Math.random() * 10) + 1,
      };

      if (!exercises.some((exercise) => exercise.name === newExercise.name)) {
        exercises.push(newExercise);
      } else {
       
        i--;
      }
    }

    return exercises;
  }

  const regenerateTable = () => {
    setExerciseList(generateRandomExercises());
  };

  return (
    <div className={classes.container}>
      <h2>Gym Exercise Table</h2>
      <button onClick={regenerateTable}>Generate Random Exercises</button>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          {exerciseList.map((exercise, index) => (
            <tr key={index}>
              <td>{exercise.name}</td>
              <td>{exercise.sets}</td>
              <td>{exercise.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GymExerciseTable;
