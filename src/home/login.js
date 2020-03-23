import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, ModalFooter, Alert } from "reactstrap";

const Login = (props) => {
    const [login, setLogin] = useState(null);
    const changeLogin = (event) => setLogin(event.target.value);

    const [password, setPassword] = useState(null);
    const changePassword = (event) => setPassword(event.target.value);

    const [alertDisplay, setAlertDisplay] = useState("none");
    const [alertColor, setAlertColor] = useState("danger");
    const [alertText, setAlertText] = useState(null);

    const setDefaultAlert = () => {
        setAlertDisplay("none");
    }

    const successAlert = (msg) => {
        setAlertDisplay("block");
        setAlertColor("success");
        setAlertText(msg);
    }

    const errorAlert = (msg) => {
        setAlertDisplay("block");
        setAlertColor("danger");
        setAlertText(msg);
    }

    const sendLogin = () => {

    }

    return (
        <>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Войти</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Alert style={{ display: alertDisplay }} color={alertColor}>{alertText}></Alert>
                        <Label>Логин</Label>
                        <Input placeholder="Логин" onChange={changeLogin} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Пароль</Label>
                        <Input type="password" placeholder="Пароль" onChange={changePassword} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={sendLogin}>Войти</Button>
                    <Button color="danger" onClick={props.close}>Закрыть</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Login