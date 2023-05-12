import React from 'react';
import { Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../Redux/store";
import {ShowAct} from "../Redux/ReadMoodReducer";
import {InnerMostType, InnerSomeData, NewsType} from "../Types";

const ModalReadMood = React.memo(() => {
    let dispatch=useDispatch()
    // @ts-ignore
    let data:Array<InnerMostType|NewsType|InnerSomeData>=useSelector<AppRootType>((state)=>state.ReadMoodReducer.data)
    let bool:any=useSelector<AppRootType>((state)=>state.ReadMoodReducer.show)
    console.log('modal')
    return (
        <>
            <Modal
                centered={true}
                show={bool}
                onHide={() => dispatch(ShowAct(false))}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                {data.map((item)=>{
                    return(
                        <div key={item.uri}>
                            <Modal.Header closeButton>

                                <Modal.Title id="example-custom-modal-styling-title">

                                    {item.title?item.title:item.abstract}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <p>
                                    {item.abstract}
                                </p>
                                <p>Source: <a href={item.url?item.url:item.web_url}>{item.url?item.url:item.web_url}</a></p>
                            </Modal.Body>
                        </div>
                    )
                })}
            </Modal>
        </>
    );
})

export default ModalReadMood;