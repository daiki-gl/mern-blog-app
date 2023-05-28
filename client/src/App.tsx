import { Route, Routes } from 'react-router-dom'
import {PostForm, Home, Login, Register, PostPage} from './pages/'
import Layout from './Layout'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Routes >
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/create'} element={<PostForm />} />
        <Route path={'/post/:id'} element={<PostPage />} />
        <Route path={'/edit/:id'} element={<PostForm />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
