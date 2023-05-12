import React from 'react';
import {InnerSomeData} from "../Types";
// @ts-ignore
import Marquee from "react-fast-marquee/dist";
import {useDispatch} from "react-redux";
import Card from "./Card";
import {GetForReadMoodAct, ShowAct} from "../Redux/ReadMoodReducer";
import st from "../Common/Common.module.css";
import {Spinner} from "react-bootstrap";

type PropsType = {
    title: string,
    data: Array<InnerSomeData>
}
const HorizontalComponent = React.memo((props: PropsType) => {
    let dis = useDispatch();
    let forReadBtn = (title: string) => {
        let s = props.data && props.data.filter((d) => d.abstract === title && d)
        dis(GetForReadMoodAct(s))
        // @ts-ignore
        dis(ShowAct(true))
    }
    console.log('horizon')
    // @ts-ignore
    return (
        <div className={'mt-10'}>
            <h2>{props.title}</h2>
            {props.data.length !== 0 ? <Marquee gradientWidth={100} speed={25} pauseOnHover={true}>
                {props.data.map(item => {
                    return (
                        <div key={item.uri}>
                            <Card readFunc={forReadBtn}
                                  img={item.multimedia.length !== 0 ? 'https://static01.nyt.com/' + item.multimedia[5].url : ''}
                                  parag={item.pub_date} title={item.abstract}></Card>
                        </div>
                    )
                })
                }
            </Marquee> : <div className={st.spinner}>
                <Spinner variant="primary" animation={"grow"}/>
            </div>}

        </div>
    )
})

export default HorizontalComponent;