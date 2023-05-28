import { Link } from 'react-router-dom'

const HeroBanner = () => {
  return (
    <div className="mr-[calc(50%-50vw)] ml-[calc(50%-50vw)] text-center mb-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')]">
      <div className="mr-[calc(50%-50vw)] ml-[calc(50%-50vw)] h-full bg-alpha-blue p-20">
          <div className="max-w-[1000px] mx-auto">
            <p className="text-white font-bold text-2xl mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ducimus distinctio aut numquam deleniti facilis adipisci recusandae quibusdam, hic earum nam? Vel repudiandae fugiat ad tempore, quibusdam facere quaerat perspiciatis.</p>
            <Link to={'/register'} className="btn bg-green-400 py-3 px-5 rounded-lg text-white hover:bg-green-600 duration-300 cursor-pointer">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner