import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { logout } from '../helper';
import { useUserStore } from '../store';

const HeaderNav = ({setOpen}: {setOpen: Dispatch<SetStateAction<boolean>>}) => {
    const {user, logoutUser } = useUserStore(state => state);
    
  return (
    <nav className='flex items-center'>
          <button onClick={() => setOpen(true)}><BiSearch /></button>
          {user && user.id && user.username ? (
            <>
              <Link className='mx-3 hover:text-blue-600 duration-300' to={'/create'} >New post</Link>
              <button className='mx-3 hover:text-blue-600 duration-300' onClick={() => {logout(); logoutUser()}} >Logout</button>
              <span className="text-blue-600 text-sm font-bold ml-3">Hi, {user.username}</span>
            </>
          ): (
            <>
              <Link className='mx-3 hover:text-blue-600 duration-300' to="/login">Login</Link>
              <Link className='mx-3 hover:text-blue-600 duration-300' to="/register">Register</Link>
            </>
          )}
      </nav>
  )
}

export default HeaderNav