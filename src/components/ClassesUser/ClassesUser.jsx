import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClassesUser = () => {
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

 

  return (
    <>
      
      <div>
        <h1>Class List</h1>
        <ul>
          {classes.map((c) => (
            <li key={c._id}>
              {c.name} - {c.time}
              
            </li>
          ))}
        </ul>
      </div>
    
    
    </>
  );
};

export default ClassesUser;
