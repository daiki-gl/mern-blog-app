import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CommentForm from '../components/CommentForm'
import CommentList from '../components/CommentList'
import Post from '../components/Posts/Post'
import { usePostStore, useUserStore } from '../store'

const PostPage = () => {
    const { id } = useParams()
    const { user } = useUserStore((state) => state);
    const { getPostById } = usePostStore(state => state);
    
    useEffect(() => {
        (async() => {
          if(id) await getPostById(id)
        })()
    },[])

  return (
    <div className='bg-gray-100 p-3 md:p-5'>
        {id && (<Post id={id} />)}
        <CommentList id={id} />
        { user.username && (<CommentForm id={id} />)}
    </div>
  )
}

export default PostPage