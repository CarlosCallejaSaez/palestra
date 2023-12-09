import React from 'react'
import StaffAdmin from '../../components/StaffAdmin/StaffAdmin';
import StaffUser from '../../components/StaffUser/StaffUser';
import { useAuth } from '../../hooks/useAuth';

const StaffPage = () => {

    const { user } = useAuth();


  return (
    <>
    {user.isAdmin ? <StaffAdmin /> : <StaffUser />}

    </>
  )
}

export default StaffPage