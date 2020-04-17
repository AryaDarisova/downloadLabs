import React, { useState } from 'react';
import ReactDOM from "react-dom";
// import App from "../App";
import {
    Card, Nav, NavItem, NavLink, UncontrolledCollapse, Button,
    CardBody,
    CardHeader,
    CardText,
    Col,
    ListGroup,
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading,
    Label, Row, Container
} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import UserProfile from "../profile/user";
import {faAngleDown, faBook, faChevronDown, faFile, faRocket, faSearch} from '@fortawesome/free-solid-svg-icons';

export default class Navigation {
    static allDepartments () {
        ReactDOM.render(
            <div>
                <Container fluid={false}>
                    {/*<Row className="justify-content-lg-center">*/}
                    <Label><h6></h6></Label>
                        <Col lg="auto">
                            <Card>
                                <CardHeader><h5>Кафедры</h5></CardHeader>
                                <CardBody>
                                    <Label><FontAwesomeIcon icon={faGraduationCap}/> Факультет информационных систем и
                                        технологий</Label>
                                    <ListGroup>
                                        <ListGroupItem tag="button" action>ИНО</ListGroupItem>
                                        <ListGroupItem tag="button" action>ИВТ</ListGroupItem>
                                        <ListGroupItem tag="button" action>ИСТ</ListGroupItem>
                                        <ListGroupItem tag="button" action>ПИ</ListGroupItem>
                                        <ListGroupItem tag="button" onClick={DepartmentsToTeachers.poutsToTeachers} action>ПОУТС</ListGroupItem>
                                        <ListGroupItem tag="button" action>СО</ListGroupItem>
                                        <ListGroupItem tag="button" action>ЦЭ</ListGroupItem>
                                    </ListGroup>
                                    <CardText></CardText>
                                    <Label><FontAwesomeIcon icon={faGraduationCap}/> Факультет базового
                                        телекоммуникационного образования</Label>
                                    <ListGroup>
                                        <ListGroupItem tag="button" action>ВМ</ListGroupItem>
                                        <ListGroupItem tag="button" action>ТОРС</ListGroupItem>
                                        <ListGroupItem tag="button" action>Физики</ListGroupItem>
                                        <ListGroupItem tag="button" action>Физвоспитания</ListGroupItem>
                                        <ListGroupItem tag="button" action>Философии</ListGroupItem>
                                    </ListGroup>
                                    <CardText></CardText>
                                    <Label><FontAwesomeIcon icon={faGraduationCap}/> Факультет телекоммуникаций и
                                        радиотехники</Label>
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
                    {/*</Row>*/}
                </Container>
            </div>,
            document.getElementById('allDepartments')
        );

        /*alert("Hop hey lalaley!");*/
    };

    static toHome () {
        ReactDOM.render(
            <UserProfile/>,
            document.getElementById('allDepartments'));
    };

    static departPOUTS () {
        ReactDOM.render(
            /*<Col sm={24}>*/
            <div>
                <Card className="w-100 mb-3">
                    <CardHeader><h5>ПОУТС</h5></CardHeader>
                    <CardBody>
                        <CardText>Кафедра программного обеспечения и управления в технических системах</CardText>
                    </CardBody>
                </Card>
                <ListGroup>
                    <ListGroupItem tag="button" onClick={Teachers.poutsTarasov} action>
                        <ListGroupItemHeading>Тарасов Вениамин Николаевич</ListGroupItemHeading>
                        <ListGroupItemText>Заведующий кафедрой, д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Гавлиевский Серго Леонидович</ListGroupItemHeading>
                        <ListGroupItemText>Д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" onClick={Teachers.poutsMostovoy} action>
                        <ListGroupItemHeading>Мостовой Яков Анатольевич</ListGroupItemHeading>
                        <ListGroupItemText>Д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Смирнов Сергей Викторович</ListGroupItemHeading>
                        <ListGroupItemText>Д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Аронов Виталий Юрьевич</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Вержаковская Марина Александровна</ListGroupItemHeading>
                        <ListGroupItemText>К.ф.-м.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Графкин Алексей Викторович</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Карташевский Игорь Вячеславович</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" onClick={Teachers.poutsKonyaeva} action>
                        <ListGroupItemHeading>Коняева Ольга Сергеевна</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Лемжин Михаил Игоревич</ListGroupItemHeading>
                        <ListGroupItemText>К.ф.-м.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Малахов Сергей Валерьевич</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Мезенцева Екатерина Михайловна</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Сивков Вадим Сергеевич</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Стефанов Михаил Александрович</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Ахметшина Элеонора Газинуровна</ListGroupItemHeading>
                        <ListGroupItemText>Старший преподаватель</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Чернова Светлана Владимировна</ListGroupItemHeading>
                        <ListGroupItemText>Старший преподаватель</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Видинеева Юлия Юрьевна</ListGroupItemHeading>
                        <ListGroupItemText>Ассистент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Расеева Екатерина Викторовна</ListGroupItemHeading>
                        <ListGroupItemText>Ассистент</ListGroupItemText>
                    </ListGroupItem>


                </ListGroup>
            </div>
            /*</Col>*/,
            document.getElementById('departments')
        );

        /*alert("Hop hey lalaley!");*/
    };

}

class Teachers {

    static poutsTarasov() {
        ReactDOM.render(
            <div>
                <Card className="w-100 mb-3">
                    <CardHeader><h5>Тарасов Вениамин Николаевич</h5></CardHeader>
                    <CardBody>
                        <CardText>Заведующий кафедрой, д.т.н., профессор</CardText>
                    </CardBody>
                </Card>

                <Card className="w-100 mb-3" id="poutsTarasov1">
                    <CardBody>
                        <CardText><h5>Проектирование и моделирование сетей ЭВМ</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov1">
                    <Card>
                        <CardBody>
                            <CardText>Методические указания:</CardText>
                            <CardText>{/*<a href="downloadLabs/public/txt.txt">*/}<FontAwesomeIcon icon={faBook} /> Скачать{/*</a>*/}</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Курсовая работа:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>
                <Card className="w-100 mb-3" id="poutsTarasov2">
                    <CardBody>
                        <CardText><h5>Численные методы</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov2">
                    <Card>
                        <CardBody>
                            <CardText>Методические указания:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>
                <Card className="w-100 mb-3" id="poutsTarasov3">
                    <CardBody>
                        <CardText><h5>Математическое программирование</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov3">
                    <Card>
                        <CardBody>
                            <CardText>Методические указания:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>


            </div>,
            document.getElementById('departments'));
    };

    static poutsMostovoy() {
        ReactDOM.render(
            <div>
                <Card className="w-100 mb-3">
                    <CardHeader><h5>Мостовой Яков Анатольевич</h5></CardHeader>
                    <CardBody>
                        <CardText>Д.т.н., профессор</CardText>
                    </CardBody>
                </Card>

                <Card className="w-100 mb-3" id="poutsTarasov1">
                    <CardBody>
                        <CardText><h5>Конструирование программного обеспечения</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov1">
                    <Card>
                        <CardBody>
                            <CardText>Методические указания:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Вопросы к экзамену:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>
                <Card className="w-100 mb-3" id="poutsTarasov2">
                    <CardBody>
                        <CardText><h5>Управление сложными техническими системами</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov2">
                    <Card>
                        <CardBody>
                            <CardText>Методические указания:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Вопросы к экзамену:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>
                <Card className="w-100 mb-3" id="poutsTarasov3">
                    <CardBody>
                        <CardText><h5>Управление программными проектами</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov3">
                    <Card>
                        <CardBody>
                            <CardText>Методические указания:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Вопросы к экзамену:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>


            </div>,
            document.getElementById('departments'));
    };

    static poutsKonyaeva() {
        ReactDOM.render(
            <div>
                <Card className="w-100 mb-3">
                    <CardHeader><h5>Коняева Ольга Сергеевна</h5></CardHeader>
                    <CardBody>
                        <CardText>К.т.н., доцент</CardText>
                    </CardBody>
                </Card>

                <Card className="w-100 mb-3" id="poutsTarasov1">
                    <CardBody>
                        <CardText><h5>Тестирование программного обеспечения</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov1">
                    <Card>
                        <CardBody>
                            <CardText>Лабораторные работы:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Вопросы к экзамену:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>
                <Card className="w-100 mb-3" id="poutsTarasov2">
                    <CardBody>
                        <CardText><h5>Управление сложными техническими системами</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov2">
                    <Card>
                        <CardBody>
                            <CardText>Численные методы:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>
                <Card className="w-100 mb-3" id="poutsTarasov3">
                    <CardBody>
                        <CardText><h5>Проектирование и архитектура программных систем</h5></CardText>
                    </CardBody>
                </Card>
                <UncontrolledCollapse toggler="#poutsTarasov3">
                    <Card>
                        <CardBody>
                            <CardText>Методические указания:</CardText>
                            <CardText href="../public/txt.txt"><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Вопросы к экзамену:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                            <CardText>Лекции:</CardText>
                            <CardText><FontAwesomeIcon icon={faBook} /> Скачать</CardText>
                        </CardBody>
                    </Card>
                    <div><br></br></div>
                </UncontrolledCollapse>


            </div>,
            document.getElementById('departments'));
    };

}

class DepartmentsToTeachers {

    static poutsToTeachers () {
        ReactDOM.render(
            <div>
                <Container fluid={false}>
                    {/*<Row className="justify-content-lg-center">*/}
                    <Label><h6></h6></Label>
                <Card className="w-100 mb-3">
                    <CardHeader><h5>ПОУТС</h5></CardHeader>
                    <CardBody>
                        <CardText>Кафедра программного обеспечения и управления в технических системах</CardText>
                    </CardBody>
                </Card>
                <ListGroup>
                    <ListGroupItem tag="button" id="poutsToTeachers1" action>
                        <ListGroupItemHeading>Тарасов Вениамин Николаевич</ListGroupItemHeading>
                        <ListGroupItemText>Заведующий кафедрой, д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <UncontrolledCollapse toggler="#poutsToTeachers1">
                        <Card>
                            <CardBody>
                                <CardText id="poutsToTeachersTarasov1"><FontAwesomeIcon icon={faRocket} /> Проектирование и моделирование сетей ЭВМ <FontAwesomeIcon icon={faAngleDown} /></CardText>
                                <div style={{marginLeft: '5%'}}><UncontrolledCollapse toggler="#poutsToTeachersTarasov1">
                                    <CardText>Методические указания:</CardText>
                                    <CardText><FontAwesomeIcon icon={faFile} /> Скачать{/*</a>*/}</CardText>
                                    <CardText>Лекции:</CardText>
                                    <CardText><FontAwesomeIcon icon={faFile} /> Скачать</CardText>
                                    <CardText>Курсовая работа:</CardText>
                                    <CardText><FontAwesomeIcon icon={faFile} /> Скачать</CardText>
                                    <div><br></br></div>
                                </UncontrolledCollapse></div>
                                <CardText><FontAwesomeIcon icon={faRocket} /> Численные методы <FontAwesomeIcon icon={faAngleDown} /></CardText>
                                <CardText><FontAwesomeIcon icon={faRocket} /> Математическое программирование <FontAwesomeIcon icon={faAngleDown} /></CardText>
                            </CardBody>
                        </Card>
                        <div><br></br></div>
                    </UncontrolledCollapse>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Гавлиевский Серго Леонидович</ListGroupItemHeading>
                        <ListGroupItemText>Д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Мостовой Яков Анатольевич</ListGroupItemHeading>
                        <ListGroupItemText>Д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Смирнов Сергей Викторович</ListGroupItemHeading>
                        <ListGroupItemText>Д.т.н., профессор</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Аронов Виталий Юрьевич</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Вержаковская Марина Александровна</ListGroupItemHeading>
                        <ListGroupItemText>К.ф.-м.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Графкин Алексей Викторович</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Карташевский Игорь Вячеславович</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Коняева Ольга Сергеевна</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Лемжин Михаил Игоревич</ListGroupItemHeading>
                        <ListGroupItemText>К.ф.-м.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Малахов Сергей Валерьевич</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Мезенцева Екатерина Михайловна</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Сивков Вадим Сергеевич</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Стефанов Михаил Александрович</ListGroupItemHeading>
                        <ListGroupItemText>К.т.н., доцент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Ахметшина Элеонора Газинуровна</ListGroupItemHeading>
                        <ListGroupItemText>Старший преподаватель</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Чернова Светлана Владимировна</ListGroupItemHeading>
                        <ListGroupItemText>Старший преподаватель</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Видинеева Юлия Юрьевна</ListGroupItemHeading>
                        <ListGroupItemText>Ассистент</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem tag="button" action>
                        <ListGroupItemHeading>Расеева Екатерина Викторовна</ListGroupItemHeading>
                        <ListGroupItemText>Ассистент</ListGroupItemText>
                    </ListGroupItem>


                </ListGroup>
                </Container>
            </div>,
            document.getElementById('allDepartments')
        );
    };
}