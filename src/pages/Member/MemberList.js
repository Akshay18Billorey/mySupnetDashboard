import * as React from 'react';
import 'material-icons/iconfont/material-icons.css';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import { SearchOutlined } from '@material-ui/icons';
import '../searchformstyle.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MemberList() {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'rgba(246,246,246,255)',
            color: "rgba(64,120,166,255)",
            // backgroundColor: theme.palette.common.red,
            // color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        // '&:nth-of-type(odd)': {
        //     backgroundColor: theme.palette.action.hover,
        // },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    function createData(name, gender, dob, email, condition, diagnosis, role, medication, doctor, advocate, phone) {
        return { name, gender, dob, email, condition, diagnosis, role, medication, doctor, advocate, phone };
    }
    const rows = [
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
    ];
    return (
        <>
            <Container>
                <br />
                <br />
                <Row>
                    <Col md={3}>MySupnet</Col>
                    <Col md={4}>
                        <form className="example">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><SearchOutlined /></button>
                        </form>
                    </Col>
                    <Col md={3}>
                        <Button variant="outlined" style={{
                            display: "flex",
                            flexwrap: "wrap",
                            height: "35px",
                            width: "100%",
                            padding: "5px",
                            border: "1px solid green",
                            borderradius: "4px",
                            fontWeight: "600",
                            color: "green",
                        }}>Filter</Button></Col>
                    <Col md={2} style={{ textAlign: "center" }}><Button variant="outlined" style={{
                        height: "35px",
                        width: "50%",
                        padding: "5px",
                        border: "1px solid green",
                        borderradius: "4px",
                        fontWeight: "600",
                        color: "green",
                    }}>Export</Button></Col>
                </Row>
            </Container>
            <br />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} >
                    <TableHead>
                        <TableRow style={{ backgroundColor: "red" }}>
                            <StyledTableCell><input type="checkbox" /></StyledTableCell>
                            <StyledTableCell>NAME</StyledTableCell>
                            <StyledTableCell >M/F</StyledTableCell>
                            <StyledTableCell >DoB</StyledTableCell>
                            <StyledTableCell >EMAIL</StyledTableCell>
                            <StyledTableCell >CONDITION</StyledTableCell>
                            <StyledTableCell >YEAR OF DIAGNOSIS</StyledTableCell>
                            <StyledTableCell >ROLE</StyledTableCell>
                            <StyledTableCell >MEDICATIONS</StyledTableCell>
                            <StyledTableCell >DOCTOR</StyledTableCell>
                            <StyledTableCell >ADVOCATE</StyledTableCell>
                            <StyledTableCell >PHONE</StyledTableCell>
                            <StyledTableCell ></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            < StyledTableRow key={row.name} >
                                <StyledTableCell><input type="checkbox" /></StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell >{row.gender}</StyledTableCell>
                                <StyledTableCell >{row.dob}</StyledTableCell>
                                <StyledTableCell >{row.email}</StyledTableCell>
                                <StyledTableCell >{row.condition}</StyledTableCell>
                                <StyledTableCell >{row.diagnosis}</StyledTableCell>
                                <StyledTableCell >{row.role}</StyledTableCell>
                                <StyledTableCell >{row.medication}</StyledTableCell>
                                <StyledTableCell >{row.doctor}</StyledTableCell>
                                <StyledTableCell >{row.advocate}</StyledTableCell>
                                <StyledTableCell >{row.phone}</StyledTableCell>
                                <StyledTableCell ></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default MemberList
