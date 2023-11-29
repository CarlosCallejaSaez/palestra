
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassesAdmin = () => {
  const [classes, setClasses] = useState([]);
  const [name, setName] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axios.get('/api/classes');
      setClasses(response.data);
    };

    fetchClasses();
  }, []);

  const handleAddClass = async () => {
    const response = await axios.post('/api/classes', { name, time });
    setClasses([...classes, response.data]);
    setName('');
    setTime('');
  };

  const handleDeleteClass = async (id) => {
    await axios.delete(`/api/classes/${id}`);
    setClasses(classes.filter((c) => c._id !== id));
  };

  return (
    <div>
      <h1>Class Management</h1>
      <div>
        <h2>Add Class</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAddClass(); }}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Time:
            <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
          </label>
          <br />
          <button type="submit">Add Class</button>
        </form>
      </div>
      <div>
        <h2>Class List</h2>
        <ul>
          {classes.map((c) => (
            <li key={c._id}>
              {c.name} - {c.time}
              <button onClick={() => handleDeleteClass(c._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassesAdmin;
