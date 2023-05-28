import { zodResolver } from '@hookform/resolvers/zod'
import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import * as z from 'zod'
import {useCommentStore} from '../store'


const schema = z.object({
    comment: z.string().min(1,{message:'Please enter the comment'}).max(300),
})


const CommentForm = ({id}:{id?:string}) => {

    const {register, handleSubmit,reset, formState: { errors , isSubmitting }} = useForm<Comment>({
        resolver: zodResolver(schema)
        })
    const navigate = useNavigate()
    const { getComments ,createComment } = useCommentStore(state=> state)
    const [res, setRes] = useState(null)

    const onSubmit = async (data:Comment) => {
      const res = await createComment(data,id)
      if(res.ok) setRes(res)
      reset()
    }

    useEffect(() => {
        getComments(id)
    },[res])

  return (
    <div className="my-10 px-3">
        <h2 className="mb-2">Leave a comment</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full" action="POST">
                    <textarea 
                        className="w-full h-24 p-3"
                        placeholder='comment'
                        {...register('comment')}
                    ></textarea>
                    {errors.comment && (<p className='text-red-500'>{errors.comment.message}</p>)}
                    <button type='submit' className=" w-full my-3 bg-blue-500 text-white rounded-md p-3 hover:bg-blue-400 duration-300">Add a comment</button>
                </form>
    </div>
  )
}

export default CommentForm

