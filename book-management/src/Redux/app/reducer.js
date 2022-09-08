import * as types from "./actionType"

const initialState={
    books:[],
    isLoading:false,
    isError:false,
}

const reducer=(oldState=initialState,action)=>{
    
    const {payload,type}=action
    switch(type){
        case types.GET_BOOK_REQUEST:
            return {
                ...oldState,
                isLoading:true,
            }

            case types.GET_BOOK_SUCCESS:
                return{
                    ...oldState,
                    books:payload,
                    isLoading:false,
                    isError:false
                }

                case types.GET_BOOK_FAILURE:
                    return{
                        ...oldState,
                        books:[],
                        isError:true,
                        isLoading:false
                    }

                default:
                    return{
                        oldState
                    }
    }
}

export {reducer}