import { BiLock, BiUser } from 'react-icons/bi'
import { GoMail } from 'react-icons/go'
import { useLocation, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import { useUserStore } from '../store'
import { CredentialFormData } from '../types/type'

const Form = ({schema}:any) => {
    const {pathname} = useLocation()
    const {register, handleSubmit, formState: { errors , isSubmitting }} = useForm<CredentialFormData>({
        resolver: zodResolver(schema)
        })

    const navigate = useNavigate()

    const { getUser, loginUser, registerUser } = useUserStore(state => state);

    const onSubmit = async (data:CredentialFormData) => {
        if(pathname === '/register') {
            const res = await registerUser(data)
            if(res.status === 200) {
                navigate('/login')
            } else {
                toast.error('Failed to register. Try again')
            }
        }

        if(pathname === '/login') {
           const res = await loginUser(data)
           if(res.ok) {
            getUser()
            navigate('/')
           } else {
            toast.error('Wrong credential')
           }
        }
    }



  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")] my-10 rounded-md shadow-md max-w-3xl mx-auto pl-0 pt-60 md:pl-80 md:pt-0 bg-contain md:bg-center md:bg-cover '>

        <ToastContainer />
        
        <div className='bg-white p-10 md:min-h-[600px]'>
            {pathname === '/register' ? (
            <h2 className='text-3xl font-bold'>Welcome to the <span className='text-blue-600'>Blog</span></h2>
            ): (
                <h2 className='text-3xl font-bold'>Welcome back! </h2>
            )}
            <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae molestiae vero dolorum incidunt modi sequi reprehenderit.</p>

            <form
                  className='text-md my-5'
                  onSubmit={handleSubmit(onSubmit)}
                  method='POST'
            >


            {pathname === '/register' && (
            <div className='mb-5 border-b'>
                <label htmlFor="username"><BiUser className='inline-block mr-3 text-3xl text-blue-200' /></label>
                <input 
                    type="text" 
                    placeholder='Username'
                    className='p-2 outline-none'
                    id='username'
                    {...register('username', {required: true})}
                    />
                    {errors.username && <p className='text-red-500'>{errors.username?.message}</p>}
            </div>)}

            <div className='mb-5 border-b'>
                <label htmlFor="email"><GoMail className='inline-block mr-3 text-3xl text-blue-200' /></label>
                <input 
                    type="email" 
                    placeholder='example@mail.com'
                    id='email'
                    className='p-2 outline-none'
                    {...register('email', {required: true})}
                    />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
            </div>
            <div className='mb-8 border-b'>
                <label htmlFor="password"><BiLock className='inline-block mr-3 text-3xl text-blue-200' /></label>
                <input 
                    type="password" 
                    placeholder='Password'
                    id='password'
                    className='p-2 outline-none'
                    {...register('password', {required: true})}
                    />
                    {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
            </div>

            {pathname === '/register' && (
                <div className='mb-8 border-b'>
                <label htmlFor="confirmPassword"><BiLock className='inline-block mr-3 text-3xl text-blue-200' /></label>
                <input 
                    type="password" 
                    placeholder='Password(confirm)'
                    id='confirmPassword'
                    className='p-2 outline-none'
                    {...register('confirmPassword', {required: true})}
                    />
                    {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword?.message}</p>}
            </div>
            )}
            <div className="text-right">
                <button type="submit" className='bg-blue-600 text-white rounded-3xl py-3 px-10 hover:bg-blue-400 duration-300'>{pathname === '/login'?'Login':'Sign up'}</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Form