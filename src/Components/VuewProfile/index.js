import React, { useContext } from 'react'
import user from '../images/user.png'
import '../VuewProfile/viewprofile.css'
import { useParams, Link } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
function Viewprofile () {
  const { Users } = useContext(GlobalContext)
  console.log(Users)
  const { Id } = useParams()
  console.log(Id)
  const CurrentUser = Users.find(user => {
    return user.id === Number(Id)
  })
  console.log(CurrentUser)
  return (
    <div className='container mt-4 mb-4 p-3 d-flex justify-content-center'>
      <div className='card p-4'>
        <div className=' image d-flex flex-column justify-content-center align-items-center'>
          <button className='btn btn-secondary'>
            <img src={user} height='100' width='100' />
          </button>
          <span className='name mt-3'>{CurrentUser.Name} </span>
          <span className='idd'>Son Of {CurrentUser.FatherName}</span>
          <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
            <span className='idd1'>{CurrentUser.Course}</span>
            <span>
              <i className='fa fa-copy'></i>
            </span>
          </div>
          <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
            <span className='number'>
              Callme In {CurrentUser.Phone} <span className='follow'></span>
            </span>
          </div>

          <div className='text mt-3'></div>

          <div className=' px-2 rounded mt-4 date '>
            <span className='join'>Joined May,2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewprofile
