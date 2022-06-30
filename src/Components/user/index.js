import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'
import { GlobalContext } from '../Context/GlobalContext'
import '../user/index.css'
function UserProfile ({
  Name,
  id,
  Course,
  FirstSem,
  SecondSem,
  LastSem,
  Average
}) {
  const { DeleteUser } = useContext(GlobalContext)
  console.log(id)
  return (
    <div className='UserProfile bg-white '>
      <div className='profileContainer mx-auto rounded'>
        <div className='img mx-auto'>
          <img width={150} src={user} alt='user image' />
        </div>
        <div className='name'>
          <h3 className='text-primary'>{Name}</h3>
        </div>
        <div className='course'>
          <h4 className='text-dark'>{Course}</h4>
        </div>
        <div className='marks'>
          <p>
            FirstSem : <span>{FirstSem}</span>{' '}
          </p>
          <p>
            SecondSem : <span>{SecondSem}</span>{' '}
          </p>
          <p>
            LastSem : <span>{LastSem}</span>{' '}
          </p>
        </div>
        <div>
          Over All :{' '}
          <span className={Average == 'Good' ? 'text-primary' : 'text-warning'}>
            {Average}
          </span>{' '}
        </div>
        <div className='buttons  d-flex mt-2 '>
          <Link className=' btn-warning rounded nav-link' to={`/edit/${id}`}>
            <strong>Edit</strong>
          </Link>

          <Link
            className=' btn-primary rounded nav-link ml-2 text-dark'
            to={`/viewprofile${id}`}
          >
            <strong>View Profile</strong>
          </Link>
          <button
            className='btn-danger round button'
            onClick={() => {
              alert(`Do You Want To Delete  ${Name}`)
              DeleteUser(id)
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
