import React, {useCallback, useEffect} from 'react';
import {Button, Col, Row, Spinner} from 'react-bootstrap';
import Carousel from 'react-bootstrap/esm/Carousel';
import {InnerSomeData, NewsType} from "../Types";
import {showMoreAction} from "../Redux/HadLineReducer";
import {useLocation} from 'react-router-dom';
import {GetForReadMoodAct, ShowAct} from "../Redux/ReadMoodReducer";
import st from '../Common/Common.module.css'
import {GetDataByCatThunk} from "../Redux/GetDataByCategory";
import {useDispatch} from "react-redux";
type HdData={
    lg:string|undefined
    // @ts-ignore
    data?:Array<NewsType|InnerSomeData>|null|undefined,
    title:string
    withSlide?:boolean,
    showMoreF?:(n:number)=>void,
    btn?:boolean
}
const Hadlines = React.memo((props:HdData) => {
    let dis=useDispatch();
    let url=useLocation();
    const PATH=url.pathname!== '/'&&url.pathname.replace('/','').toLowerCase()
    useEffect(()=>{
        // @ts-ignore
        dis(GetDataByCatThunk(PATH))
    },[PATH])
    const showMore=()=>{
        // @ts-ignore
        dis(showMoreAction())
    }

    let forReadBtn=(title:string)=>{
        let s= props.data&&props.data.filter((d)=>d.uri===title&&d)
        dis(GetForReadMoodAct(s))
        // @ts-ignore
        dis(ShowAct(true))
    }
    console.log('Hadlines')
    // @ts-ignore
    return (
        // @ts-ignore
        <Col lg={props.lg?props.lg:'5'}>
            <h2>{props.title}</h2>
            {props.withSlide?<Carousel fade={true} interval={3000} indicators={false} controls={false}>
                    {props.data?.length!==0?props.data?.map((s)=>{
                            return(
                                <Carousel.Item key={s.title}>
                                    <img
                                        className="d-block w-100 h-75"
                                        src={s.multimedia?s.multimedia[2].url:'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'}
                                        alt={s.slug_name}
                                    />
                                    <h5>{s.title}</h5>
                                    <p className={st.link} onClick={()=>forReadBtn(s.uri)}> Read more</p>
                                    <p>{s.published_date}</p>
                                </Carousel.Item>
                            )
                        }

                        ):
                        <div className={st.spinner}>
                            <Spinner  variant="primary" animation={"grow"}/>
                        </div>
                    }
                </Carousel>:
                <div>
                    {props.data?.map((s)=>{
                        return(
                            <div key={s.created_date}>
                                <h4>{s.title?s.title:s.snippet}</h4>
                                <p>{s.published_date?s.published_date:s.pub_date}</p>
                                <p className={st.link} onClick={()=>forReadBtn(s.uri)}> Read more</p>
                            </div>)
                    })}
                    {props.data?.length!==0? <Row >
                        {props.btn?<Button onClick={()=>showMore()}>
                            {`No more news on this topic`}
                        </Button>:<Button onClick={()=>showMore()}>
                            {'Show more'}
                        </Button>}

                    </Row>:<div className={st.spinner}>
                        <Spinner  variant="primary" animation={"grow"}/>
                    </div>}
                </div>
            }

        </Col>
    );
})

export default Hadlines;



