import { create } from "zustand";
import { sendComment, fetchComments } from "../helper";
import { CommentType } from "../types/type";

type CommentStore = {
    comments: CommentType[] | null,
    error: string | null,
    isLoading: 'pending' | 'idle',
    getComments: (id:string) => void
    createComment: (data:CommentType, id: string) => any
}

const useCommentStore = create<CommentStore>((set) => ({
    comments: null,
    error: null,
    isLoading: 'pending',

    getComments: async (id) => {
        try{
            set({isLoading: 'idle'})
            const data = await fetchComments(id)
            set({isLoading: 'pending', comments: [...data]})
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    },

    createComment: async (data, id) => {
        try{
            set({isLoading: 'idle'})
            const res = await sendComment(data, id)
            set({isLoading: 'pending'})
            return res
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    }
}))

export default useCommentStore