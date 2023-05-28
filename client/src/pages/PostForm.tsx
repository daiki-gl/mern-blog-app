import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill"
import { useLocation, useNavigate } from "react-router-dom";
import * as z from 'zod'
import { constant } from "../constants/constants";
import { PostFormData } from "../types/type";
import { usePostStore } from "../store";
import 'react-quill/dist/quill.snow.css'

const schema = z.object({
    title: z.string().min(1,{message:'Please enter a valid title'}).max(100),
    summary: z.string().max(400),
    content: z.string(),
    category: z.literal('service').or(z.literal('web')).or(z.literal('sales')).or(z.literal('marketing')),
    thumbnail: z.any()
            .refine((files) => files?.[0]?.size <= constant.MAX_FILE_SIZE, `Choose an image. Max image size is 5MB.`)
            .refine(
            (files) => constant.ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
})

const PostForm = () => {
    const navigate = useNavigate()
    const {state} = useLocation()
    const postData = state?.postData
    const {register, handleSubmit, setValue, watch, formState: { errors , isSubmitting }} = useForm<PostFormData>({
        resolver: zodResolver(schema),
        values: postData ? {
            title: postData.title,
            summary: postData.summary,
            thumbnail: postData.thumbnail,
            content: postData.content,
            category: postData.category
        } : undefined,
    })
    const {editPost, createPost} = usePostStore(state => state)
    const { pathname } = useLocation()

  const onSubmit = async(data:PostFormData) => {
    if(pathname === '/create') {
        const res = await createPost(data)
        if(res.ok) navigate('/')
    } else {
        const res = await editPost(data, postData._id)
        if(res.ok) navigate(`/post/${postData._id}`)
    }
    }

  const onEditorStateChange = (editorState:string) => {
    setValue('content', editorState);
  };
  const editorContent = watch('content');

  return (
    <>
    <h2 className="text-3xl text-blue-500 mb-5">{pathname === '/create' ? 'Create a new post': 'Edit the post'}</h2>
    <form action="POST" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input 
            type="text" 
            className="border p-3 rounded-md mb-3"
            placeholder="Title"
            {...register('title')}
            />
            {errors.title && (<p className="text-red-500">{errors.title.message}</p>)}
        <input 
            type="text" 
            className="border p-3 rounded-md mb-3"
            placeholder="Summary"
            {...register('summary')}
            />
            <select
            className="border p-3 rounded-md mb-3"
            {...register('category')}
            >
              <option value="service">Service</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="web">Web</option>
            </select>

            {errors.summary && (<p className="text-red-500">{errors.summary.message}</p>)}
        <input 
            type="file" 
            className="border p-3 rounded-md mb-3"
            {...register('thumbnail')}
            />
            {errors.thumbnail && (<p className="text-red-500">{errors.thumbnail.message}</p>)}
        <ReactQuill 
            value={editorContent}
            onChange={onEditorStateChange} 
            modules={constant.MODULES} 
            formats={constant.FORMATS} 
        />
        {errors.content && (<p className="text-red-500">{errors.content.message}</p>)}

        <button className="btn bg-blue-600 py-3 px-5 rounded-lg text-white hover:bg-blue-400 duration-300 cursor-pointer mt-5">{pathname ? 'Create a new post' : 'Edit the post'}</button>
    </form>
    </>
  )
}

export default PostForm