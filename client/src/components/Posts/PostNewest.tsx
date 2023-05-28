import { intlFormat } from 'date-fns';
import { Link } from 'react-router-dom';
import { PostType } from '../../types/type';

const PostNewest = ({_id, title, summary, thumbnail, author, createdAt}:PostType) => {
  return (
    <div className='w-full md:w-3/5'>
        <Link to={`/post/${_id}`}>
            <img className='w-full max-h-64 object-cover' src={`http://localhost:8000/${thumbnail}`} alt="" />
            <div className='bg-slate-100 pt-3 pb-5 px-5'>
                <h2 className='font-bold text-3xl mb-2'>{title}</h2>
                <p className='mb-5 text-gray-500'>{summary}</p>
                <div className='border-l-2 pl-1 border-l-blue-500'>
                <span className='text-slate-500 text-sm'>{author.username}</span>
                <time className='text-slate-500 text-sm ml-5'>{intlFormat(new Date(createdAt),{
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }, {
                  locale: 'en-CA'
                })}</time>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default PostNewest