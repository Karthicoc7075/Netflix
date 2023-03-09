

export const movie = (state={movies:null},action)=>{
    switch(action.type){
        case    'ALL__MOVIES':
            return {...state,movies:action.data}
        default:
            return state;
    }
}