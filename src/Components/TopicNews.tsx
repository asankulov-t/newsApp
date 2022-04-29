import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSomeTopicThunk} from "../Redux/TopicReducer";
import {AppRootType} from "../Redux/store";
import HorizontalComponent from "./HorizontalComponent";

type PropsType={
    title?:string
}
const TopicNews = React.memo((props:PropsType) => {
    let topic: Array<string> = ['Museums', 'Politics', 'Sports', 'Society', 'Style', 'Arts', 'Automobiles', 'Culture', 'Financial', 'Health', 'Fitness', 'Movies', 'Home', 'Technology'];
    let rand = '';
    let res = () => {
        rand = topic[Math.floor(Math.random() * topic.length)];
    }

    let dis=useDispatch();
    useEffect( ()=>{
        // @ts-ignore
        dis(getSomeTopicThunk(rand.toLowerCase()))
    },[rand])
    res()
    console.log('Topic')
    let data:any=useSelector<AppRootType>((state)=>state.TopicReducer.data)
    // @ts-ignore
    return (
        <div>
            <HorizontalComponent data={data} title={'Another news'}/>
        </div>
    );
})

export default TopicNews;