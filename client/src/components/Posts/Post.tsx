import { intlFormat } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import {useUserStore, usePostStore} from "../../store";

const Post = ({id}:{id:string}) => {
    const { user } = useUserStore((state) => state);
    const { postInfo, isLoading, deletePost } = usePostStore(state => state);
    const navigate = useNavigate()
    const deleteFn = async () => {
        if(id) {
            const res =  await deletePost(id)
            if(res.ok) navigate('/')
        }
    }

    return (
        <>
        {postInfo && isLoading !== 'idle' && (
            <>
                <img className='w-full max-h-[600px] object-cover' src={`http://localhost:8000/${postInfo.thumbnail}`} alt="" />
                <h2 className="text-3xl font-bold my-5">{postInfo.title}</h2>
    
                <div className='flex justify-between p'>
                    <div>
    
                <span className='text-slate-500'>{postInfo.author.username}</span>
                <time className=' ml-3 text-slate-500 text-sm -mt-8'>{intlFormat(new Date(postInfo.createdAt),{
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          }, {
                          locale: 'en-CA'
                        })}</time>
                    </div>
        
                {postInfo.author._id === user.id && (
                <div>
                    <Link to={`/edit/${user.id}`} state={{postData:postInfo}} className='text-2xl inline-block'><BiEdit /></Link>
                    <button className='inline-block text-2xl ml-3' 
                    onClick={deleteFn}
                    ><BiTrash /></button>
                </div>
                )}
                </div>
    
                <div dangerouslySetInnerHTML={{ __html:postInfo.content}} />
    
            </>
            )}
        </>
    )
}

export default Post