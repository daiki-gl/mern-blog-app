import React from 'react'
import { intlFormat } from 'date-fns'
import { Link } from 'react-router-dom'
import { PostType } from '../ArticlesSection'

const PostCard = (props:PostType) => {
  const { title, summary, thumbnail, author, _id, createdAt } = props
  return (
    <div className="max-w-sm bg-white rounded-lg shadow mx-auto w-full">
      <Link to={`/post/${_id}`}>
          <img className="rounded-t-lg w-full h-56 object-cover" src={`http://localhost:8000/${thumbnail}`} alt="" />
      </Link>
      <div className="p-5">
          <a href="#">
              <h2 className="mb-2 text-xl font-bold tracking-tight line-clamp-2 border-b">{title}</h2>
          </a>
          <p className="mb-3 text-md text-gray-500 line-clamp-3">{summary}</p>
          <div className='mb-3 border-l-2 pl-1 border-l-blue-500'>
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
          <Link to={`/post/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 transition-all">
              Read more
          </Link>
      </div>
  </div>
  )
}

export default PostCard