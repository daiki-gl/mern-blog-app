import Form from '../components/Form'
import * as z from 'zod'

const schema = z.object({
  email: z.string()
        .email({ message: 'Please enter a valid email' }),
  password: z
        .string()
        .min(1, { message: 'Please enter a valid password' })
        .max(50)
})

const Login = () => {
  return (
    <Form schema={schema} />
  )
}

export default Login