import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, CardBody, CardHeader, CardText, Button } from "reactstrap";

const Home = () => {
    return (
        <Container className="mt-5 text-center">
            <h1 className="text-align-center">Новая папка</h1>
            <h3>Просто способ получить доступ к лабам и методичкам онлайн!</h3>
            <Button className="mt-5 mb-5" color="primary" size="lg">Начни прямо сейчас!</Button>
            <Row>
                <Col lg={4}>
                    <Card>
                        <CardHeader>
                            <h3>Не будь отчисленным</h3>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                Каждый год 64532452342 студентов отчисляют из учебных заведений потому что они не могут найти лабораторные и методички.<br />
                                Не стань одним из них. Найди всю необходимую информацию уже сейчас.
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
                                Чтобы воспользоваться нашим сервисом, необходимо уметь включать компуктер и выходить в интернет. Если ты не умеешь это делать, то пусть наши приложение
                                поможет тебе получить мотивацию для саморазвития!
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;