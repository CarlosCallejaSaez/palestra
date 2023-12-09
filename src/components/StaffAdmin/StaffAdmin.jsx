import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffAdmin = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [staff, setStaff] = useState([]);

  const fetchStaff = async () => {
    try {
      const response = await axios.get('/api/staff');
      setStaff(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);

      await axios.post('/api/staff', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      await fetchStaff();

      alert('Staff added successfully!');

 
    } catch (error) {
      console.error('Error adding staff:', error);
    }
  };


  useEffect(() => {
   
  
    fetchStaff();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`api/staff/${id}`);
      setStaff((prevStaff) => prevStaff.filter((staff) => staff._id !== id));
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  return (
    <>
    <div>
      <h2>Add Staff Member</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">Add Staff Member</button>
      </form>
    </div>

<div>
<h2>Staff List</h2>
<ul>
  {staff.map((staff) => (
    <li key={staff._id}>
      <img src={staff.avatar} alt={staff.name}  />
      {staff.name}
      <button onClick={() => handleDelete(staff._id)}>Delete</button>
    </li>
  ))}
</ul>
</div>
</>
  );
};

export default StaffAdmin;