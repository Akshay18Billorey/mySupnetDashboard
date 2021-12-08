import React from 'react'
import { Card } from 'react-bootstrap'
import { CardImg } from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import logo from "../../logo.svg";
import '../searchformstyle.css'
import { SearchOutlined } from '@material-ui/icons';
function EventsList() {
    return (
        <>
            <Container>
                <br />
                <br />
                <Row>
                    <Col md={1}></Col>
                    <Col md={2}>MySupnet</Col>
                    <Col md={6}>
                        <form className="example">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><SearchOutlined /></button>
                        </form>
                    </Col>
                    <Col md={2} style={{ textAlign: "center" }}><Button style={{
                        height: "30px",
                        width: "100%",
                        // padding: "5px",
                        backgroundColor: "green",
                        border: "1px solid green",
                        borderradius: "4px",
                        fontWeight: "400",
                        color: "white",
                    }}>CREATE EVENT</Button></Col>
                    <Col md={1}></Col>
                </Row>
                <br />

                <Row>
                    <div style={{ backgroundColor: '#f9f9f9', color: "#4078a6" }}>
                        <h4>UPCOMING EVEVTS</h4>
                    </div>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />

                <Row>
                    <div style={{ backgroundColor: '#f9f9f9', color: "#4078a6" }}>
                        <h4>PAST EVEVTS</h4>
                    </div>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={logo} />
                            <Card.Body>
                                <Card.Text>
                                    <Row>
                                        <Col md={4} style={{ textAlign: "center", color: "#4078a6", fontWeight: "bold" }}>
                                            <p >
                                                MAY <br /> 20
                                            </p>
                                        </Col>
                                        <Col md={8}>
                                            <span style={{ fontWeight: "bold" }}>
                                                5th IBD Seminar
                                            </span>
                                            <br />
                                            <span>Hiloday Inn Orchard</span>
                                            <br />
                                            <span>Sat 6:30 p.m.</span>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <hr />
                                <div style={{ textAlign: "right", color: "#4078a6", fontWeight: "bold" }}>
                                    <p>2 going</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EventsList
