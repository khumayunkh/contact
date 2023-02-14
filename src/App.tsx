import { Route, Routes } from 'react-router-dom'
import './App.sass'
import { Login } from './pages/Login/Login'
import { SignUp } from './pages/SingUp/SingUp'
import { Layout } from './routers/Layout'
import { Contacts } from './pages/Contacts/Cantacts'
import { Edit } from './pages/EditContact/Edit'
import {Create} from './pages/CreateContact/Create'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Contacts/>}/>
          <Route path='create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
