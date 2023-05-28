import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { GrFormClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
  <header className='mb-5 sticky top-0 bg-white py-4 px-5 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] shadow-sm z-10 md:mx-1'>
    <div className='flex justify-between lg:max-w-[1000px] md:max-w-[728px] mx-auto'>
      <Link to="/" className="logo font-bold text-2xl">Blog Portal</Link>
      <HeaderNav setOpen={setOpen} />
    </div>

    <div className={`searchBox absolute top-0 left-0 bg-white p-10 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen shadow-md duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className='mx-auto max-w-[1000px]'>

        <form action="GET" className='border-b pb-5'>
          <div className="flex">
          <button type='submit'><BiSearch className='text-3xl font-bold' /></button>
          <input type="text" placeholder='Search' className='px-3 w-full text-2xl outline-none' />
          <button type='button' onClick={() => setOpen(false)}><GrFormClose className='ml-auto text-4xl' /></button>
          </div>
        </form>

      </div>
    </div>
</header>
  )
}

export default Header