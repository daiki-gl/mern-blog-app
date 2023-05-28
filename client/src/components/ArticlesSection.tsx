import Tabs from './Tabs'
import {PostCard} from './Posts'
import {usePostStore} from '../store'
import { PostType } from '../types/type'

const ArticlesSection = () => {
  const { posts } = usePostStore(state => state)

  return (
    <div className='mb-24'>
    <Tabs />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts && posts.length > 0 && posts.map((post:PostType) => (
        <PostCard key={post._id} {...post} />
      ))}
    </div>

  </div>
  )
}

export default ArticlesSection