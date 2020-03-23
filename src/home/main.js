import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardHeader, CardText, CardGroup, Button } from "reactstrap";

const Main = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-align-center">Новая папка</h1>
            <h3>Просто способ получить доступ к лабам и методичкам онлайн!</h3>
            <h3 className="mt-5 mb-5">Начни прямо сейчас!</h3>
            <Row>
                <Col lg={4}>
                    <Card>
                        <CardHeader>
                            <h3>Не будь отчисленным</h3>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <p>Каждый год 64532452342 студентов отчисляют из учебных заведений потому что они не могут найти лабораторные и методички.<br />
                                    Не стань одним из них. Найди всю необходимую информацию уже сейчас.
                                    </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <CardHeader>
                            <h3>Будь свободнее</h3>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <p>Отстаивание очередей в библиотеку это прошлый век. Сэкономь свое время вместе с нами! Получи доступ ко всей информации прямо сейчас!</p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <CardHeader>
                            <h3>Развивайся</h3>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <p>Чтобы воспользоваться нашим сервисом, необходимо уметь включать компуктер и выходить в интернет. Если ты не умеешь это делать, то пусть наши приложение
                                поможет тебе получить мотивацию для саморазвития!
                                </p>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;