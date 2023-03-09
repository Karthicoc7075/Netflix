import * as api from '../api/index';


export const signUp =(form)=>async(dispatch)=>{
    const {data} =await api.signUp(form);
    console.log(data);
    dispatch({type:'AUTH',data})
}

export const signIn =(form)=>async(dispatch)=>{
    const {data} =await api.signIn(form);
    console.log(data);
    dispatch({type:'AUTH',data})
}

export const logout =()=>async(dispatch)=>{
    dispatch({type:'LOGOUT'})
}

export const userEmail =(data)=>async(dispatch)=>{
    dispatch({type:'USER__EMAIL',data})
}

export const likeMovie =(likeMovie)=>async(dispatch)=>{
    const {data} =await api.likeMovie(likeMovie);
    dispatch({type:'LIKE__MOVIE',data})
}
