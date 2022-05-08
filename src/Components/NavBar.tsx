
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import s from './NavBar.module.css'
import {GetDataByCatThunk} from "../Redux/GetDataByCategory";
import {useDispatch} from "react-redux";
import React from "react";

const NavBar = React.memo(() => {
    let dis=useDispatch();
    let somf=(str:string)=>{

        setTimeout(()=>{
            // @ts-ignore
            dis(GetDataByCatThunk(str))
        },1000)
    }
    return (
        <div className={s.main}>
            <Navbar collapseOnSelect expand="lg" bg="light" className={'ms-auto'} variant="light">
                <Container>
                    <Navbar.Brand href="/">News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className={s.menu}>
                            <Link onClick={()=>somf('politics')} to="/politics">Politics</Link>
                            <Link onClick={()=>somf('sport')} to="/sport">Sport</Link>
                            <Link onClick={()=>somf('health')} to="/health">Health</Link>
                            <Link onClick={()=>somf('culture')} to="/culture">Culture</Link>
                            <Link onClick={()=>somf('art')} to="/art">Art</Link>
                            <Link onClick={()=>somf('cryptocurrency')} to="/Cryptocurrency">Cryptocurrency</Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
})

export default NavBar;