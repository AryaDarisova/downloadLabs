import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Input, Label, Card, CardHeader, CardBody, Row, CardFooter, Button, Container } from "reactstrap";

const AdminReg = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Container>
            <Row className="mt-5 justify-content-center">
                <Col sm={6}>
                    <Card>
                        <CardHeader><h4>Регистрация администратора</h4></CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input name="email" id="email" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Пароль</Label>
                                    <Input name="password" id="password" type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="confirmPassword">Повторите пароль</Label>
                                    <Input name="confirmPassword" id="confirmPassword" type="text" />
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>
                            <Button className="mr-3" color="primary">Регистрация</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AdminReg;