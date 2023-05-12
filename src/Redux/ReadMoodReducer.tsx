import {InnerMostType, InnerSomeData, MostPopularType, NewDataType, NewsType, SomeDataType} from "../Types";

let initialState:MostPopularType|NewDataType|SomeDataType={
    data:[],
    show:false
}

type GetForReadMoodType={
    type:'GETREADMOODDATA',
    data:any
}
type ShowType={
    type:'SHOW',
    show:boolean
}
export const ShowAct=(show:boolean)=>{
    return{
        type:'SHOW',
        show
    }
}
// @ts-ignore
export const GetForReadMoodAct= (data: null | undefined | (NewsType | InnerSomeData)[]):GetForReadMoodType=>{
    return{
        type:'GETREADMOODDATA',
        data
    }
}

const ReadMoodReducer = (state=initialState,action:GetForReadMoodType|ShowType) => {
    switch (action.type) {
        case "GETREADMOODDATA":
            return {...state,data: [...action.data]}
        case "SHOW":
            return {...state, show:action.show}
        default:return state
    }
};

export default ReadMoodReducer;