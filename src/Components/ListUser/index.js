import React, { useContext } from 'react'
import UserProfile from '../user'
import { GlobalContext } from '../Context/GlobalContext'
function ListUser () {
  const { Users } = useContext(GlobalContext)
  console.log(Users,"users")

  return (
    <div>
      <div className='List-head'>
        <h3>Student List is Here....</h3>
      </div>
      <div className='lists '>
        {Users
          ? Users.map((user, pos) => {
              return (
                <UserProfile
                  key={pos}
                  Name={user.Name}
                  Course={user.Course}
                  FirstSem={user.FirstSem}
                  SecondSem={user.SecondSem}
                  LastSem={user.LastSem}
                  Average={user.Average}
                  id={user.id}
                ></UserProfile>
              )
            })
          : ''}
      </div>
    </div>
  )
}

export default ListUser
