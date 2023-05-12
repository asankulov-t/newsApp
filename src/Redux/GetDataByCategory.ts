import {InnerSomeData, SomeDataType} from "../Types";
import {API} from "../DAL/Api";
let initialState:SomeDataType={
    data:[]
}

type GetDataActionType={
    type:'GET_BY_CAT',
    data:Array<InnerSomeData>
}
export const GetDataByCategory=(state=initialState,action:GetDataActionType)=>{
    switch (action.type) {
        case "GET_BY_CAT":
            return {...state,data: [...action.data]}
        default:return state
    }
}

export const getDataAct=(data:Array<InnerSomeData>):GetDataActionType=>{
    return {
        type:'GET_BY_CAT',
        data:data
    }
}

export const GetDataByCatThunk=(search?:string)=>{
    // @ts-ignore
    return dispatch=>{
        return API.getCatData(search).then(res=>{
            dispatch(getDataAct(res.data.response.docs))
        })
    }
}
