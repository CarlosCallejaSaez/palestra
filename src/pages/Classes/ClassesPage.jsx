import React from 'react'
import ClassesAdmin from '../../components/ClassesAdmin/ClassesAdmin'
import ClassesUser from '../../components/ClassesUser/ClassesUser'
import { useAuth } from '../../hooks/useAuth';

const ClassesPage = () => {

    const { user } = useAuth();


  return (
    <>
    {user.isAdmin ? <ClassesAdmin /> : <ClassesUser />}

    </>
  )
}

export default ClassesPage