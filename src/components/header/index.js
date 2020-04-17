import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavbarBrand, Nav, NavItem, Form, FormGroup, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import newFolder from './img/newFolder.png';
import { NavLink } from 'react-router-dom';
import Auth from "../auth/auth";

const Header = () => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const toggleLoginDropdown = () => setIsOpenLogin(!isOpenLogin);

    return (
        <Navbar color="dark" expand="md">
            <NavbarBrand href="#">
                <img src={newFolder} alt="logo" />
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink to="/"><Button color="dark">На главную</Button></NavLink>
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
                    <Input type="text" className="w-100" placeholder="Найти.." />
                </FormGroup>
                <FormGroup>
                    <Button color="success">Найти</Button>
                </FormGroup>
            </Form>
            <Nav className="ml-auto" navbar>
                <NavItem className="mr-2">
                    <Dropdown isOpen={isOpenLogin} toggle={toggleLoginDropdown}>
                        <DropdownToggle>
                            Вход
                    </DropdownToggle>
                        <DropdownMenu>
                            <NavLink to="/login/admin"><DropdownItem>Администратор</DropdownItem></NavLink>
                            <NavLink to="/login/user">
                                <DropdownItem onClick={Auth.setLocalStorageUser}>
                                    Пользователь
                                </DropdownItem>
                            </NavLink>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem>
                    <NavLink to="/registration/admin"><Button >Регистрация</Button></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;