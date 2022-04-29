import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
import {Container} from "react-bootstrap";
import Hadlines from "./Components/Hadlines";
import {useDispatch, useSelector} from "react-redux";
import {getHadlineThunk} from "./Redux/HadLineReducer";
import {AppRootType} from "./Redux/store";
import {NewsType} from "./Types";
import PopularActicles from "./Components/PopularActicles";
import TopicNews from "./Components/TopicNews";
import {Route, Routes, useLocation} from "react-router-dom";
import ModalReadMood from "./Components/ModalReadMood";

const App = React.memo(() => {
    const history = useLocation();


    let dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getHadlineThunk())
    }, []);

    // @ts-ignore
    let datas: Array<NewsType> = useSelector<AppRootType>((state) => state.HadLineReducer.data)
    // @ts-ignore
    let catData: any = useSelector<AppRootType>((state) => state.GetDataByCategory.data)
    console.log('app')
    return (
        <div>
            <NavBar/>
            <Container>

                <Row>
                    <ModalReadMood/>
                    <Hadlines lg={'3'} title={'Hadline news'} withSlide={true} data={datas ? datas : null}/>
                    <Routes>
                        <Route path={history.pathname == '/newsapp' ? '/newsapp' : '/'}
                               element={<Hadlines lg={'6'} title={'Latest news'} withSlide={false}
                                                  data={datas ? datas : null}/>
                               }/>
                        <Route path={history.pathname} element={<Hadlines lg={'6'}
                                                                          title={history.pathname !== '/' && history.pathname !== '/newsapp' ? history.pathname.replace('/', '')[0].toUpperCase() + history.pathname.slice(2) : ''}
                                                                          data={catData ? catData : null}
                                                                          btn={true}
                        />
                        }/>
                    </Routes>
                    <PopularActicles lg={'3'} title={'Most Popular'}/>
                </Row>
                <TopicNews/>
            </Container>

        </div>
    );
})

export default App;
