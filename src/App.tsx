import { Route, Routes } from 'react-router-dom'
import './App.sass'
import { useAppSelector } from './hooks/actions'
import { Login } from './pages/Login/Login'
import { SignUp } from './pages/SingUp/SingUp'
import { Layout } from './routers/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>

        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
