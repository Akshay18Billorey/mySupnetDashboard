import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
function Navbar() {
    return (
        <Container>
            <br />
            <br />
            <Row>
                <Col md={3}></Col>
                <Col md={4}>
                    <input
                        variant="outlined"
                        color="primary"
                        type="text"
                        placeholder="Search"
                    />
                </Col>
                <Col md={3}>
                    <Button variant="outlined" color="primary" style={{ width: "100%" }}>Filter</Button></Col>
                <Col md={2}><Button variant="outlined" color="primary" style={{ width: "100%" }}>Export</Button></Col>
            </Row>
        </Container>
    )
}

export default Navbar


