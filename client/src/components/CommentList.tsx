import { useEffect } from 'react'
import { intlFormat } from 'date-fns'
import { useCommentStore } from '../store'
import { CommentType } from '../types/type'


const CommentList = ({id}:{id?:string}) => {
    const { comments ,getComments } = useCommentStore(state => state)

    useEffect(() => {
       if(id) getComments(id)
    },[])

  return (
        <div className="mt-10 mb-5 bg-blue-50 p-5">
            <h2 className="text-lg mb-5 pb-2 border-b border-slate-900">Comments</h2>
            <ul>
            {comments && comments.map((comment:CommentType) => (
                <li key={comment._id}  className='my-5 border-l-2 border-blue-400 pl-5'>
                    <span className='text-blue-500 font-bold'>{comment.author.username}</span>
                    <time className=' ml-3 text-slate-500 text-sm'>{intlFormat(new Date(comment.createdAt),{
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      }, {
                      locale: 'en-CA'
                    })}</time>
                    <div className='border-b border-b-slate-300 pb-3'>
                        {comment.comment}
                    </div>
                </li>
            ))}
            </ul>
        </div>
  )
}

export default CommentList