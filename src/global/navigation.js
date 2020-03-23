import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, Button, Nav, NavItem, NavLink, Form, FormGroup, Input } from 'reactstrap';
import newFolder from './newFolder.png';
import Login from "../home/login";
import Registration from "../home/registration";

const Navigation = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const toggleLogin = () => setIsOpenLogin(!isOpenLogin);

    const [isOpenRegistration, setIsOpenRegistration] = useState(false);
    const toggleRegistration = () => setIsOpenRegistration(!isOpenRegistration);

    return (
        <>
        <Navbar color="dark" expand="md">
            <NavbarBrand href="#">
                <img src={newFolder} />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <Button color="dark">На главную</Button>
                </NavItem>
                <NavItem>
                    <Button color="dark">Кафедры</Button>
                </NavItem>
                <NavItem>
                    <Button color="dark">Преподаватели</Button>
                </NavItem>
                <NavItem>
                    <Button color="dark">Учебные материалы</Button>
                </NavItem>
            </Nav>
            <Form inline>
                <FormGroup className="mr-2">
                    <Input type="text" placeholder="Найти.." />
                </FormGroup>
                <FormGroup>
                    <Button color="success">Найти</Button>
                </FormGroup>
            </Form>
            <Nav className="ml-auto" navbar>
                <NavItem className="mr-2">
                    <Button color="dark" onClick={toggleLogin}>Вход</Button>
                </NavItem>
                <NavItem>
                    <Button color="dark" onClick={toggleRegistration}>Регистрация</Button>
                </NavItem>
            </Nav>
        </Navbar>
        <Login isOpen={isOpenLogin} close={toggleLogin} />
        <Registration isOpen={isOpenRegistration} close={toggleRegistration} />
        </>
    )
}

export default Navigation;