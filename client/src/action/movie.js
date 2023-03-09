import * as api from '../api/index';

export const AllMovies =()=>async (dispatch)=>{
     const {data} = await api.GetAllMovies();
     
     dispatch({type:'ALL__MOVIES',data})

}