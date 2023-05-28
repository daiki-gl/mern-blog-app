import { create } from 'zustand'
import { getUserData, login, register } from '../helper'
import { CredentialFormData } from '../types/type'

type UserStore = {
  user: {
    id: string | null
    username: string | null
  }
  error: string | null
  isLoading: 'pending' | 'idle'
  logoutUser: () => void
  getUser: () => void
  registerUser: (formData: CredentialFormData) => any
  loginUser: (formData:CredentialFormData) => any
}

const useUserStore = create<UserStore>((set) => ({
  user: {
    id: null,
    username: null,
  },
  error: null,
  isLoading: 'pending',

  logoutUser: () => set({ user: {id: null, username: null} }),

  getUser: async () => {
    try{
        set({isLoading: 'idle'})
        const data = await getUserData()
        set({isLoading: 'pending', user: {id: data.id, username: data.username}})
    } catch(e) {
        const error = (e as Error).message
        set({error, isLoading: 'pending'})
    }
    },
    registerUser: async (formData) => {
      try{
        set({isLoading: 'idle'})
        const res = await register(formData)
        set({isLoading: 'pending'})
        return res
    } catch(e) {
        const error = (e as Error).message
        set({error, isLoading: 'pending'})
    }
    },
    loginUser: async (formData) => {
          try{
            set({isLoading: 'idle'})
            const res = await login(formData)
            set({isLoading: 'pending'})
          return res
        } catch(e) {
            const error = (e as Error).message
            set({error, isLoading: 'pending'})
        }
    }
}))

export default useUserStore