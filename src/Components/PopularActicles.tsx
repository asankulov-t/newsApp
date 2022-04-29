import React, {useEffect} from 'react';
import {Col, Row, Spinner} from 'react-bootstrap';
import {InnerMostType} from "../Types";
import s from  './PopularArcticle.module.css'
import {getMostThunk} from "../Redux/MostPopularReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../Redux/store";
import {Link} from "react-router-dom";
import {GetForReadMoodAct, ShowAct} from "../Redux/ReadMoodReducer";
import st from "../Common/Common.module.css";
type PropsType={
    lg:string
    data?:Array<InnerMostType>,
    title:string
}

const PopularActicles = React.memo((props:PropsType) => {
    let dispatch=useDispatch();
    useEffect(()=>{
        // @ts-ignore
        dispatch(getMostThunk())
    },[])
    // @ts-ignore
    let data:Array<InnerMostType>=useSelector<AppRootType>((state)=>state.MostPopularReducer.data);
    let forReadBtn=(id:number)=>{
           let s= data.filter((d)=>d.id===id&&d)
           dispatch(GetForReadMoodAct(s))
           dispatch(ShowAct(true))
    }
    console.log('popular')
    return (
        // @ts-ignore
        <Col lg={props.lg}>
            <div className={s.scroll}>
                <h2>{props.title}</h2>

                {data.length!==0?data.map((item)=>{
                    return(

                        <Row key={item.uri}>
                            <Col lg={'7'}>
                                <Link onClick={()=>forReadBtn(item.id)} to={'/'}><h6>{item.title}</h6></Link>
                            </Col>
                            <Col lg={'5'}>
                                <p>{item.published_date}</p>
                            </Col>
                        </Row>
                    )
                }):
                <div className={st.spinner}>
                    <Spinner  variant="primary" animation={"grow"}/>
                </div>
                }
            </div>
        </Col>
    );
})

export default PopularActicles;