import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable from 'material-table'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import '../searchformstyle.css'
import { SearchOutlined } from '@material-ui/icons';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function PendingList() {
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
    function createData(name, email, condition, role, medication, phone) {
        return { name, email, condition, role, medication, phone };
    }
    const rows = [
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
        createData('xyz', 'xyz', 'xyz', 'xyz', 'xyz', 'xyz'),
    ];

    return (
        <>
            <Container>
                <br />
                <br />
                <Row>
                    <Col md={2}>MySupnet</Col>
                    <Col md={4}>

                        <form className="example">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><SearchOutlined /></button>
                        </form>
                    </Col>
                    <Col md={2}>
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
                    <Col md={1} style={{ textAlign: "center" }}><Button variant="outlined" style={{
                        height: "35px",
                        width: "100%",
                        padding: "5px",
                        border: "1px solid green",
                        borderradius: "4px",
                        fontWeight: "600",
                        color: "green",
                    }}>Export</Button></Col>
                    <Col md={2} style={{ textAlign: "center" }}><Button style={{
                        height: "35px",
                        width: "100%",
                        // padding: "5px",
                        backgroundColor: "green",
                        border: "1px solid green",
                        borderradius: "4px",
                        fontWeight: "600",
                        color: "white",
                    }}>Approve</Button></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
            <br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} >
                    <TableHead>
                        <TableRow style={{ backgroundColor: "red" }}>
                            <StyledTableCell><input type="checkbox" /></StyledTableCell>
                            <StyledTableCell>NAME</StyledTableCell>
                            <StyledTableCell >EMAIL</StyledTableCell>
                            <StyledTableCell >CONDITION</StyledTableCell>
                            <StyledTableCell >ROLE</StyledTableCell>
                            <StyledTableCell >MEDICATIONS</StyledTableCell>
                            <StyledTableCell >PHONE</StyledTableCell>
                            <StyledTableCell ></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell><input type="checkbox" /></StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell >{row.email}</StyledTableCell>
                                <StyledTableCell >{row.condition}</StyledTableCell>
                                <StyledTableCell >{row.role}</StyledTableCell>
                                <StyledTableCell >{row.medication}</StyledTableCell>
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

export default PendingList
