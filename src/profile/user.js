import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Form, FormGroup, Input, InputGroup, ListGroup, ListGroupItem, InputGroupAddon, InputGroupText, Label, Card, CardHeader, CardBody, Row, CardFooter, Button, Container,
    CardText, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import Navigation from "../home/Navigation";

const UserProfile = (props) => {
    const [modalSsOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => setModalIsOpen(!modalSsOpen);

    return (
        <Container fluid={false}>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <CardHeader><h3>Ночкин Никита Андреевич, 4 курс</h3></CardHeader>
                        <CardBody>
                            <CardText>Факультет: Информационных систем и технологий</CardText>
                            <CardText>Специальность: Программная инженерия</CardText>
                            <CardText>Номер зачетной книжки: 160245</CardText>
                            <CardText>Группа: РПИС-61</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <CardHeader>
                            <Form>
                                <Col>
                                    <FormGroup className="mr-auto">
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text"
                                                   placeholder="Введите фио преподавателя, название дисциплины или кафедры..."/>
                                            <InputGroupAddon addonType="append">
                                                <Button color="success" >Найти</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Form>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={4}>
                    <Card>
                        <CardHeader><h5>Кафедры</h5></CardHeader>
                        <CardBody>
                            <Label><FontAwesomeIcon icon={faGraduationCap} /> Факультет информационных систем и технологий</Label>
                            <ListGroup>
                                <ListGroupItem tag="button" action>ИНО</ListGroupItem>
                                <ListGroupItem tag="button" action>ИВТ</ListGroupItem>
                                <ListGroupItem tag="button" action>ИСТ</ListGroupItem>
                                <ListGroupItem tag="button" action>ПИ</ListGroupItem>
                                <ListGroupItem tag="button" onClick={Navigation.departPOUTS} action>ПОУТС</ListGroupItem>
                                <ListGroupItem tag="button" action>СО</ListGroupItem>
                                <ListGroupItem tag="button" action>ЦЭ</ListGroupItem>
                            </ListGroup>
                            <CardText></CardText>
                            <Label><FontAwesomeIcon icon={faGraduationCap} /> Факультет базового телекоммуникационного образования</Label>
                            <ListGroup>
                                <ListGroupItem tag="button" action>ВМ</ListGroupItem>
                                <ListGroupItem tag="button" action>ТОРС</ListGroupItem>
                                <ListGroupItem tag="button" action>Физики</ListGroupItem>
                                <ListGroupItem tag="button" action>Физвоспитания</ListGroupItem>
                                <ListGroupItem tag="button" action>Философии</ListGroupItem>
                            </ListGroup>
                            <CardText></CardText>
                            <Label><FontAwesomeIcon icon={faGraduationCap} /> Факультет телекоммуникаций и радиотехники</Label>
                            <ListGroup>
                                <ListGroupItem tag="button" action>ИБ</ListGroupItem>
                                <ListGroupItem tag="button" action>ЛС и ИТС</ListGroupItem>
                                <ListGroupItem tag="button" action>РЭС</ListGroupItem>
                                <ListGroupItem tag="button" action>ССС</ListGroupItem>
                                <ListGroupItem tag="button" action>ССРС</ListGroupItem>
                                <ListGroupItem tag="button" action>ТБС</ListGroupItem>
                                <ListGroupItem tag="button" action>ЭТО</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={8}>
                    <div id="departments">
                        <Card className="w-100 mb-3">
                            <CardHeader><h5>Поиск</h5></CardHeader>
                            <CardBody>
                                <CardText>Выберите кафедру из списка справа или произведите поиск</CardText>
                            </CardBody>
                        </Card>
                    </div>



                    {/*<Card className="w-100 mb-3">
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
                    </Card>*/}
                    {/*<Card className="w-100">
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
                    </Card>*/}
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfile;