import { intlFormat } from 'date-fns'
import { Link } from 'react-router-dom'
import { PostType } from '../../types/type'

const PostSmall = ({title, thumbnail, _id, createdAt,author}:PostType) => {
  return (
    <Link className='mb-5 hover:shadow-lg duration-200' to={`/post/${_id}`}>
        <div className='flex gap-3'>
            <img width={150} height={50} className='object-cover h-28' 
            src={`http://localhost:8000/${thumbnail}`} alt="" />
            <div className='flex flex-col justify-between py-2'>
                <h2 className='font-bold text-md line-clamp-2'>{title}</h2>
                <div>
                <span className='text-slate-500 text-sm block -mb-1'>{author.username}</span>
                <time className='text-slate-500 text-sm'>{intlFormat(new Date(createdAt),{
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }, {
                  locale: 'en-CA'
                })}</time>
                  
                </div>
            </div>
        </div>
    </Link>
  )
}

export default PostSmall