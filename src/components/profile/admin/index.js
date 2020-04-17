import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, FormGroup, Input, Label, Card, CardHeader, CardBody, Row, CardFooter, Button, Container, CardText, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";

const AdminProfile = (props) => {
    const [modalSsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => setModalIsOpen(!modalSsOpen);

    return (
        <Container fluid={false}>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <CardHeader><h3>Поволжский государственный университет телекоммуникаций и информатики</h3></CardHeader>
                        <CardBody>
                            <CardText>Расположен: ул. Льва Толстого, 23, Самара, Самарская обл., 443010</CardText>
                            <CardText>Дата основания: 4 января 1956 года</CardText>
                            <CardText>Код учебного заведения: 1</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <CardHeader className="d-flex justify-content-between">
                            <h4>Студенты</h4>
                            <Button color="primary" onClick={toggleModal}>Добавить студента</Button>
                            <Modal isOpen={modalSsOpen}>
                                <ModalHeader><h3>Добавить студента</h3></ModalHeader>
                                <ModalBody>
                                    <Form>
                                        <FormGroup>
                                            <Label>Имя</Label>
                                            <Input placeholder="Имя"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Фамилия</Label>
                                            <Input placeholder="Фамилия"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Отчество</Label>
                                            <Input placeholder="Отчество"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Курс</Label>
                                            <Input placeholder="Курс"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Факультет</Label>
                                            <Input placeholder="Факультет"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Специальность</Label>
                                            <Input placeholder="Специальность"/>
                                        </FormGroup>
                                    </Form>
                                </ModalBody>
                                <ModalFooter className="d-flex justify-content-end">
                                    <Button color="success">Добавить</Button>
                                    <Button color="danger" onClick={toggleModal}>Выйти</Button>
                                </ModalFooter>
                            </Modal>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={4}>
                    <Card>
                        <CardHeader>Фильтрация</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label>Фамилия</Label>
                                    <Input placeholder="Фамилия" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Имя</Label>
                                    <Input placeholder="Имя" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Отчество</Label>
                                    <Input placeholder="Отчество" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Курс</Label>
                                    <Input placeholder="Курс" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Факультет</Label>
                                    <Input placeholder="Факультет" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Специальность</Label>
                                    <Input placeholder="Специальность" />
                                </FormGroup>
                                <FormGroup>
                                    <Button className="w-100" color="primary">Найти</Button>
                                    <Button className="w-100 mt-2" color="secondary ">Сбросить</Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={8}>
                    <Card className="w-100 mb-3">
                        <CardHeader><h4>Сортировка</h4></CardHeader>
                        <CardBody>
                            <FormGroup row>
                                <Col sm={2}>
                                    <Label>Сортировать по:</Label>
                                </Col>
                                <Col sm={10}>
                                    <Input type="select">
                                        <option>Имени: в алфавитном порядке</option>
                                        <option>Имени: в обратном порядке</option>
                                        <option>Курсу: по возрастанию</option>
                                        <option>Курсу: по убыванию</option>
                                        <option>Факультету: в алфавитном порядке</option>
                                        <option>Факультету: в обратном порядке</option>
                                        <option>Специальности: в алфавитном порядке</option>
                                        <option>Специальности: в обратном порядке</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                        </CardBody>
                    </Card>
                    <Card className="w-100">
                        <CardHeader><h4>Иван Иванович Пупкин</h4></CardHeader>
                        <CardBody>
                            <Row>
                                <Col sm={9}>
                                    <CardText>Факультет информационных систем и технологий, 3 курс, специальность программная инженерия</CardText>
                                </Col>
                                <Col sm={3}>
                                    <Button className="w-100" color="primary">Изменить</Button>
                                    <Button className="w-100 mt-2" color="danger">Удалить</Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminProfile;