import {InnerSomeData, SomeDataType} from "../Types";
import {API} from "../DAL/Api";

let initialState:SomeDataType={
    data:[]
}

type GetTopickType={
    type:'GET_TOPIC',
    data:Array<InnerSomeData>
}

export const TopicReducer=(state=initialState,action:GetTopickType)=>{
    switch (action.type) {
        case "GET_TOPIC":
            return{...state, data: [...action.data]}
        default:return state
    }
}

export const getTopicAct=(data:Array<InnerSomeData>):GetTopickType=>{
    return {
        type:'GET_TOPIC',
        data:data
    }
}

export const getSomeTopicThunk=(search:string)=>{
    // @ts-ignore
    return dispatch=>{
        return API.getSomeData(search).then(res=>{
            dispatch(getTopicAct(res.data.response.docs))
        })
    }
}