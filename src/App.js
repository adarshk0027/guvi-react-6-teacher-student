import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import CreateUserForm from './Components/CreateUserForm'
import ListUser from './Components/ListUser'
import NavBarWrapper from "./Components/NavBar'"
import RouterConfig from './Components/RouterDom'
function App () {
  return (
    <BrowserRouter>
      <NavBarWrapper></NavBarWrapper>
      <RouterConfig></RouterConfig>
    </BrowserRouter>
  )
}

export default App
