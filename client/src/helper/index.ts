
import { CommentType, CredentialFormData, PostFormData } from "../types/type"
const URL = import.meta.env.VITE_URL

// User
export async function getUserData() {
    const res = fetch(`${URL}/profile`, {
       credentials: 'include'
     })
     return (await res).json()
}

export function logout() {
    fetch(`${URL}/logout`, {
      credentials: 'include',
      method: 'POST'
    })
}

export async function register(data:CredentialFormData) {
  const { username, password, email } = data
  const res = await fetch(`${URL}/register`, {
        method: 'POST',
        body: JSON.stringify({username, password, email}),
        headers: {'Content-Type': 'application/json'},
    })
    return res
}

export async function login(data:CredentialFormData) {
  const { password, email } = data
  const res = await fetch(`${URL}/login`, {
        method: 'POST',
        body: JSON.stringify({password, email}),
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    })
    return res
}

// Post
export async function getPosts() {
  const res = await fetch(`${URL}/post`)
  const posts = res.json()
  return posts
}

export async function getPostsByCategory(category:string)  {
  const res = await fetch(`${URL}/category/${category}`)
  const posts = await res.json()
  return posts
}

export async function getPostById(id:string) {
 const res = await fetch(`${URL}/post/${id}`)
 return await res.json()
}

export async function getLatestPosts() {
  const res = await fetch(`${URL}/post/latest`)
  const posts = res.json()
  return posts
}

export async function deletePost(id:string) {
    const res = await fetch(`${URL}/delete/${id}`, {
        method: 'DELETE',
    })
    return res
}

export async function createPost(data:PostFormData) {
  const postData = new FormData()
    postData.set('title', data.title)
    postData.set('summary', data.summary)
    postData.set('content', data.content)
    postData.set('thumbnail', data.thumbnail[0])
    postData.set('category', data.category)

    const res = await fetch(`${URL}/create`, {
        method: 'POST',
        body: postData,
        credentials: 'include'
    })
    return res
}

export async function editPost(data:PostFormData, postId:string) {
  const newPostData = new FormData()
    newPostData.set('title', data.title)
    newPostData.set('summary', data.summary)
    newPostData.set('content', data.content)
    newPostData.set('category', data.category)
    newPostData.set('id', postId)
    if(data.thumbnail[0]) {
        newPostData.set('thumbnail', data.thumbnail?.[0])
    } 

  const res = await fetch(`${URL}/post`, {
        method: 'PUT',
        body: newPostData,
        credentials: 'include'
    })

    return res
}

// Comments
export async function fetchComments(id?:string) {
  const res = await fetch(`${URL}/comment/${id}`)
  const data = await res.json()

  return data
}


export async function sendComment(data:CommentType,id:string) {
  const { comment } = data
  const res = await fetch(`${URL}/comment/${id}`, {
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
  })

  return res
}