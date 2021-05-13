import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const usersAPI = {
    requestUsers: () =>{
        return apiInstance.get('users').then(responce => responce.data);
    },
    requestUserPosts: (userId) =>{
        return apiInstance.get(`users/${userId}/posts`).then(responce => responce.data);
    }
}

export const postsAPI = {
    requestPosts: () =>{
        return apiInstance.get('posts').then(responce => responce.data);
    },
    requestPostComments: (postId) =>{
        return apiInstance.get(`posts/${postId}/comments`).then(responce => responce.data);
    }
}

