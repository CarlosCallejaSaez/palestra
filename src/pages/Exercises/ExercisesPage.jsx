

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ExercisesPage.css"

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    
    description: '',
    duration: 0,
    date: new Date().toISOString().substring(0, 10),
  });

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = () => {
    axios.get('/api/exercises')
      .then((response) => setExercises(response.data))
      .catch((error) => console.error('Error fetching exercises:', error));
  };

  const handleInputChange = (e) => {
    setNewExercise({
      ...newExercise,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExercise = () => {
    axios.post('/api/exercises/add', newExercise)
      .then((response) => {
        console.log('Exercise added:', response.data);
        fetchExercises();
      })
      .catch((error) => console.error('Error adding exercise:', error));
  };

  const handleUpdateExercise = (id) => {
    axios.post(`/api/exercises/update/${id}`, newExercise)
      .then((response) => {
        console.log('Exercise updated:', response.data);
        fetchExercises();
      })
      .catch((error) => console.error('Error updating exercise:', error));
  };

  const handleDeleteExercise = (id) => {
    axios.delete(`/api/exercises/${id}`)
      .then((response) => {
        console.log('Exercise deleted:', response.data);
        fetchExercises();
      })
      .catch((error) => console.error('Error deleting exercise:', error));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="exercise-list-container">
      <h2>Cardio Sessions List</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise._id}>
             {exercise.description} - {exercise.duration} minutes - {formatDate(exercise.date)}
            <button onClick={() => handleUpdateExercise(exercise._id)}>Update</button>
            <button onClick={() => handleDeleteExercise(exercise._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add Cardio Session</h2>
      
      <div>
        <label>
          Description:
          <input type="text" name="description" value={newExercise.description} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Duration (minutes):
          <input type="number" name="duration" value={newExercise.duration} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Date:
          <input type="date" name="date" value={newExercise.date} onChange={handleInputChange} />
        </label>
      </div>
      <button onClick={handleAddExercise}>Add Exercise</button>
    </div>
  );
};

export default ExerciseList;
