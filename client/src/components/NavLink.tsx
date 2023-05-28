import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getPostsByCategory } from '../helper';
import { usePostStore } from '../store';


const NavLink = ({category = ''}:{category?:string}) => {
    const [isActive, setIsActive] = useState(false);
    const {search} = useLocation()
    const { getPostsByCat, getPosts } = usePostStore(state => state)

    useEffect(() => {
        const path = search.split('=')
        const curr = path[path.length - 1]
        if(category === curr) {
            setIsActive(true)
            getPostsByCat(category)
        } else {
            setIsActive(false)
        }
        if(!category && !curr) {
            getPosts()
            setIsActive(true)
        }

    },[search])

  

  return (
    <li className="mr-2">
              <Link onClick={() => getPostsByCategory(category)}
                    to={category ? '?category=' + category : '/'} 
                    className={`inline-block px-4 py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300
                    ${isActive ? 'text-blue-500 border-b-blue-600' : ''}`}
            >{category || 'All'}</Link>
    </li>
  )
}

export default NavLink