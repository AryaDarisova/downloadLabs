import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, ModalFooter, Alert } from "reactstrap";

const Registration = (props) => {
    const [login, setLogin] = useState(null);
    const changeLogin = (event) => setLogin(event.target.value);

    const [email, setEmail] = useState(null);
    const changeEmail = (event) => setEmail(event.target.value);

    const [password, setPassword] = useState(null);
    const changePassword = (event) => setPassword(event.target.value);

    const [confirmPassword, setConfirmPassword] = useState(null);
    const changeConfirmPassword = (event) => setConfirmPassword(event.target.value);

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

    const sendRegister = () => {

    }

    return (
        <>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Регистрация</ModalHeader>
                <ModalBody>
                    <Alert style={{ display: alertDisplay }} color={alertColor}>{alertText}></Alert>
                    <FormGroup>
                        <Label>Логин</Label>
                        <Input placeholder="Логин" onChange={changeLogin} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input placeholder="Email" onChange={changeEmail} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Пароль</Label>
                        <Input type="password" placeholder="Пароль" onChange={changePassword} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Подтверждение пароля</Label>
                        <Input type="password" placeholder="Пароль" onChange={changeConfirmPassword} />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                        <Button color="success" onClick={sendRegister}>Регистрация</Button>
                        <Button color="danger" onClick={props.close}>Закрыть</Button>
                    </ModalFooter>
            </Modal>
        </>
    );
}

export default Registration;