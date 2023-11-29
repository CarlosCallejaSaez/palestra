import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassesPage = () => {
  const [classes, setClasses] = useState([]);
  const [newClass, setNewClass] = useState({
    name: '',
    time: '',
    image: null,
  });

  useEffect(() => {
    
    axios.get('http://localhost:5000/api/classes')
      .then(response => setClasses(response.data))
      .catch(error => console.error('Error fetching classes:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'image') {
      setNewClass(prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setNewClass(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddClass = () => {
    const formData = new FormData();
    formData.append('name', newClass.name);
    formData.append('time', newClass.time);
    formData.append('image', newClass.image);

    
    axios.post('http://localhost:5000/api/classes', formData)
      .then(response => {
        setClasses(prevClasses => [...prevClasses, response.data]);
        
        setNewClass({
          name: '',
          time: '',
          image: null,
        });
      })
      .catch(error => console.error('Error adding class:', error));
  };

  const handleDeleteClass = (id) => {
    
    axios.delete(`http://localhost:5000/api/classes/${id}`)
      .then(response => {
        setClasses(prevClasses => prevClasses.filter(c => c._id !== id));
      })
      .catch(error => console.error('Error deleting class:', error));
  };

  return (
    <div>
      <h1>Classes</h1>
      <ul>
        {classes.map(c => (
          <li key={c._id}>
            {c.name} - {c.time}
            <button onClick={() => handleDeleteClass(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New Class</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={newClass.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Time:</label>
        <input type="text" name="time" value={newClass.time} onChange={handleInputChange} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" name="image" onChange={handleInputChange} />
      </div>
      <button onClick={handleAddClass}>Add Class</button>
    </div>
  );
};

export default ClassesPage;
