import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <main className="container px-5">
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout