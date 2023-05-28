import { useEffect } from 'react'
import { PostType } from '../types/type'
import { usePostStore } from '../store'
import { PostNewest, PostSmall } from './Posts'

const LatestArticlesSection = () => {
  const { latestPosts, getLatestPosts } = usePostStore(state => state)

  useEffect(() => {
      getLatestPosts()
  },[])

  return (
    <div className="flex flex-col gap-5 border-t pt-5 md:flex-row">
       { latestPosts && latestPosts?.length > 0 && ( <PostNewest {...latestPosts[0]} />)}
        <div className='w-full md:w-2/5 flex flex-col'>
          <h2 className='border-b-2 border-b-blue-600 mb-5 font-bold text-lg'>Latest Articles</h2>
          {latestPosts && latestPosts.map((post:PostType) => (
            <PostSmall key={post._id} {...post} />
          )
          )}
        </div>
      </div>
  )
}

export default LatestArticlesSection