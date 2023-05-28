import { create } from 'zustand'
import { getLatestPosts, getPosts, getPostsByCategory, deletePost,getPostById, createPost, editPost } from '../helper'
import { PostFormData, PostType } from '../types/type'

type PostStore = {
    latestPosts: PostType[] | null
    posts: PostType[] | null
    postInfo: PostType | null
    error: string | null
    isLoading: 'pending' | 'idle'
    getPosts: () => void
    getPostsByCat: (category:string) => void
    getLatestPosts: () => void
    getPostById: (id:string) => any
    deletePost: (id:string) => any
    createPost: (postData:PostFormData) => any
    editPost: (data:PostFormData, postId:string) => any
}

const usePostStore = create<PostStore>((set) => ({
    latestPosts: null,
    posts: null,
    postInfo: null,
    error: null,
    isLoading: 'pending',

    getPosts: async () => {
        try{
            set({isLoading: 'idle'})
            const data = await getPosts()
            set({isLoading: 'pending', posts: [...data]})
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    },

    getPostsByCat: async (category) => {
        try{
            set({isLoading: 'idle'})
            const data = await getPostsByCategory(category)
            set({isLoading: 'pending', posts: [...data]})
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    },

    getLatestPosts: async () => {
        try{
            set({isLoading: 'idle'})
            const data = await getLatestPosts()
            set({isLoading: 'pending', latestPosts: [...data]})
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    },

    getPostById: async (id) => {
        try{
            set({isLoading: 'idle'})
            const data = await getPostById(id)
            set({isLoading: 'pending', postInfo: data})
            return data
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    },

    deletePost: async (id) => {
        try{
            set({isLoading: 'idle'})
            const data = await deletePost(id)
            set({isLoading: 'pending'})
            return data
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    },

    createPost: async (postData) => {
        try{
            set({isLoading: 'idle'})
            const data = await createPost(postData)
            set({isLoading: 'pending'})
            return data
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    },
     
    editPost: async(data, postId) => {
        try{
            set({isLoading: 'idle'})
            const res = await editPost(data, postId)
            set({isLoading: 'pending'})
            return res
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    }

}))

export default usePostStore