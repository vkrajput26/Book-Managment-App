import * as types from "./actionType"

const initialState={
    isAuth:false,
    token:"",
    isAuthLoading:false,
    isAuthError:false,
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return{
                ...oldState,
                isAuthLoading:true,

            }
            case types.USER_LOGIN_SUCCESS:
                return{
                    ...oldState,
                    isAuthLoading:false,
                    isAuth:true,
                    token:payload
                }

                case types.USER_LOGIN_FAILURE:
                    return{
                        ...oldState,
                        isAuthError:true,
                        token:"",
                        isAuthLoading:false,
                        isAuth:false
                    }

                    default:
                        return{
                            oldState
                        }
    }
}
export {reducer}