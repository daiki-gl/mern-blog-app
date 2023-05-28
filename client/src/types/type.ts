export type PostFormData = {
    id?: string,
    title: string,
    summary: string,
    thumbnail: string,
    content:string,
    category: string,
}

export type PostType = {
    _id: string
    title: string
    summary: string
    content: string
    thumbnail: string
    author: {
      username: string
      _id: string
    }
    category: string
    createdAt: string
  }

  export type CredentialFormData = {
    username?: string
    email: string;
    password : string
    confirmPassword?: string;
}

export type CommentType = {
    _id: string,
    comment: string
    createdAt: string,
    author: {
        username: string
    }
}