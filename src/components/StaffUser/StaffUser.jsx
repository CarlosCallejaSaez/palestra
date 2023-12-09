import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./StaffUser.css"

const StaffUser = () => {
 
  const [staff, setStaff] = useState([]);

  const fetchStaff = async () => {
    try {
      const response = await axios.get('/api/staff');
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  

  useEffect(() => {
   
  
    fetchStaff();
  }, []);

 

  return (
    <div className='container'>
   
<h1>Staff List</h1>
<ul>
  {staff.map((staff) => (
    <li key={staff._id}>
      <img src={staff.avatar} alt={staff.name}  />
      <h2>{staff.name}</h2>
     
    </li>
  ))}
</ul>

</div>
  );
};

export default StaffUser;