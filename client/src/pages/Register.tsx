import Form from '../components/Form'
import * as z from 'zod'

const schema = z.object({
  username: z.string()
        .min(1,{message: 'Please enter a valid username'}).max(20),
  email: z.string()
        .email({ message: 'Please enter a valid email' }),
  password: z
        .string()
        .min(1, { message: 'Please enter a valid password' })
        .max(50),
  confirmPassword: z
              .string()
              .min(1, { message: 'Please enter a valid password' })
              .max(50)
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Password don't match",
  path: ["confirmPassword"]
})


const Register = () => {
  return (
      <Form schema={schema}  />
  )
}

export default Register