import {NewDataType, NewsType} from "../Types";
import {Dispatch} from "react";
import {API} from "../DAL/Api";
type getHadlineNews={
    type:'HADLINE',
    // @ts-ignore
    data:Array<NewsType>
}

// @ts-ignore
let initialState:NewDataType={
    data:[

    ],
    count:4
}



type actionTypes=getHadlineNews
export const HadLineReducer=(state=initialState,action:actionTypes)=>{
    switch (action.type) {
        case "HADLINE":
            return {...state,data:[...action.data]}
        default:return state
    }
}

// @ts-ignore
export const getHadLineAction=(data:Array<NewsType>):getHadlineNews=>{
    return{
        type:'HADLINE',
        data:data
    }
}

let count=4;

export const showMoreAction=()=>{
    count=count+4
    // @ts-ignore
    return dispatch=>{
        dispatch(getHadlineThunk(count))
    }
}

export const getHadlineThunk=(count?:number)=>{
    // @ts-ignore
    return dispatch=>{
        return  API.getNews(count?count:4).then(res=>{
            dispatch(getHadLineAction(res.data.results))
        })
    }
}