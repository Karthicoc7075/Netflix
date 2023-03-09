
export const auth =(state={authData:null,email:null},action)=>{
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('authReducer',JSON.stringify(action.data));
            return {...state,authData:action.data}

        case 'LOGOUT':
            localStorage.clear('authReducer');
            return {state,authData:null}
            case 'USER__EMAIL':
            return {...state,email:action.data}
        case 'LIKE__MOVIE':
             return {...state,authData}
        default:
            return state;
    }
}

