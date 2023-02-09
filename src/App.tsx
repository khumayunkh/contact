import { Route, Routes } from 'react-router-dom'
import './App.sass'
import { Login } from './pages/Login/Login'
import { SignUp } from './pages/SingUp/SingUp'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
