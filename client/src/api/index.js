import axios from "axios";

const API = axios.create({baseURL:'http://localhost:8000'});


API.interceptors.request.use((req) => {
    if (localStorage.getItem('authReducer')) {
      req.headers.Authorization = `${JSON.parse(localStorage.getItem('authReducer')).token}`;
    }
  
    return req;
  });
  

export const signIn = (formData)=> API.post('/user/signIn',formData);
export const signUp = (formData)=> API.post('/user/signUp',formData);
export const userVerify = (formData)=> API.post('/user/userVerify',formData);
export const likeMovie = (likeMovie)=> API.post(`/user/likeMovie`,likeMovie);

export const    GetAllMovies = ()=> API.get('/movies');