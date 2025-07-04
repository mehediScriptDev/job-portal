
import { Outlet } from 'react-router'
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'

function App() {
  

  return (
    <section className='w-11/12 mx-auto'>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </section>
  )
}

export default App
