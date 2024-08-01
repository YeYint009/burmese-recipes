import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout