import {InnerMostType, MostPopularType} from "../Types";
import {API} from "../DAL/Api";
type MostTypesAct={
    type:'GET_MOST',
    data:Array<InnerMostType>
}

let initialState:MostPopularType={
    data:[]
}

type actionTypes=MostTypesAct
export const MostPopularReducer=(state=initialState,action:actionTypes)=>{
    switch (action.type) {
        case "GET_MOST":
            return {...state,data: [...action.data]}
        default:return state
    }
}

export const getMostAction=(data:Array<InnerMostType>):MostTypesAct=>{
    return{
        type:'GET_MOST',
        data:data
    }
}

export const getMostThunk=()=>{
    // @ts-ignore
    return dispatch=>{
        return  API.getMostPopular().then(res=>{
            dispatch(getMostAction(res.data.results))
        })
    }
}