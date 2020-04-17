import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    CardHeader,
    CardBody,
    Row,
    CardFooter,
    Button,
    Container,
    DropdownItem
} from "reactstrap";
import Auth from "../../auth/auth";

const UserLogin = () => {
    return (
        <Container>
            <Row className="mt-5 justify-content-center">
                <Col sm={6}>
                    <Card>
                        <CardHeader><h4>Авторизация пользователя</h4></CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="username">Логин</Label>
                                    <Input name="username" id="loginUserLogin" type="text" />
                                </FormGroup>
                                <FormGroup >
                                    <Label>Код учебного заведения</Label>
                                    <Input type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Пароль</Label>
                                    <Input type="text" id="loginUserPassword"/>
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button className="mr-3" color="primary"
                                    onClick={Auth.loginUser}>
                                Войти
                            </Button>
                            <Button color="primary" >Восстановить пароль</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default UserLogin;