import { Routes, Route } from 'react-router-dom'
import React from 'react'
import CreateStudentForm from '../CreateUserForm'
import ListUser from '../ListUser'
import { GlobalProvider } from '../Context/GlobalContext'
import EditStudent from '../EditUser'
import Viewprofile from '../VuewProfile'
import EditProfile from '../EditProfile'
function RouterConfig () {
  return (
    <GlobalProvider>
      <Routes>
        <Route path='/' element={<ListUser></ListUser>}></Route>
        <Route path='home' element={<ListUser></ListUser>}></Route>
        <Route path='create-student' element={<CreateStudentForm></CreateStudentForm>}></Route>
        <Route path='/edit/:Id' element={<EditStudent></EditStudent>}></Route>
        <Route path='viewprofile:Id' element={<Viewprofile></Viewprofile>}></Route>
        
        </Routes>
    </GlobalProvider>
  )
}

export default RouterConfig
