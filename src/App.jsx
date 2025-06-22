
import { Outlet } from 'react-router'
import './App.css'
import Nav from './Components/Nav'

function App() {
  

  return (
    <section className='w-11/12 mx-auto'>
    <Nav></Nav>
    <Outlet></Outlet>
    </section>
  )
}

export default App
