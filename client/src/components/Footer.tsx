import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='pr-0 p-10 md:pr-10 '>
      <div className='flex justify-between'>
        <div className='w-1/3 border-r'>
          <Link to={'/'} className="font-bold text-3xl">Blog</Link>
        </div>
        <nav className='flex justify-between w-2/3 ml-10 flex-col md:flex-row'>
          <ul className="mb-10 md:mb-0">
            <li className='font-bold mb-3'>Categories</li>
            <li className='mb-2'><Link to={'/?category=service'} className='font-light hover:text-blue-600 duration-300' >Service</Link></li>
            <li className='mb-2'><Link to={'/?category=sales'} className='font-light hover:text-blue-600 duration-300'>Sales</Link></li>
            <li className='mb-2'><Link to={'/?category=marketing'} className='font-light hover:text-blue-600 duration-300'>Marketing</Link></li>
            <li className='mb-2'><Link to={'/?category=web'} className='font-light hover:text-blue-600 duration-300'>Web</Link></li>
          </ul>

          <ul>
            <li className="font-bold mb-3">Company</li>
            <li className='mb-2'><a className='font-light hover:text-blue-600 duration-300' href="">About us</a></li>
            <li className='mb-2'><a className='font-light hover:text-blue-600 duration-300' href="">Contact</a></li>
            <li className='mb-2'><a className='font-light hover:text-blue-600 duration-300' href="">Privacy policy</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer