import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//  SET INITIAL STATE
const InitialState = {
  USERS: [
    {
      id: 1,
      Name: 'Adrsh K',
      FatherName: 'Radhakrishnan K',
      Course: 'BA English',
      Phone: '7592053980',
      FirstSem: '190',
      SecondSem: '175',
      LastSem: '158',
      Average: 'Good'
    },
    {
      id: 2,
      Name: 'Athira K',
      FatherName: 'Radhakrishnan K',
      Course: 'Bcom',
      Phone: '7592053970',
      FirstSem: '170',
      SecondSem: '165',
      LastSem: '151',
      Average: 'Good'
    }
  ]
}
//CREATE GLOBAL CONTEXT
export const GlobalContext = createContext(InitialState)
//PROVIDER COMPONENT
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState)
  const DeleteUser = id => {
    console.log(id)
    dispatch({
      type: 'DELETE_USER',
      payload: id
    })
  }
  const AddUser = userData => {
    dispatch({
      type: 'ADD_USER',
      payload: userData
    })
  }

  const EditUser = EditData => {
    dispatch({
      type: 'EDIT_USER',
      payload: EditData
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        Users: state.USERS,
        DeleteUser,
        AddUser,
        EditUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
