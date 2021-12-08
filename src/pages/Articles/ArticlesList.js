import * as React from 'react';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import '../searchformstyle.css'
import { SearchOutlined } from '@material-ui/icons';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function ArticlesList() {
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
    // var rowCount = ('#myTable >tbody >tr').length;
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        // '&:nth-of-type(odd)': {
        //     backgroundColor: theme.palette.action.hover,
        // },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49),
    ];

    const columns = [
        {
            field: 'id',
            headerName: 'TITLE',
            editable: true,
            headerClassName: 'super-theme',
            width: 300,
        },
        {
            field: 'id1',
            headerName: 'POST ON',
            headerClassName: 'super-theme',
            width: 120,
        },
        {
            field: 'id2',
            headerName: 'SECTION > SUB-SECTION',
            headerClassName: 'super-theme',
            width: 400,
        },
        {
            field: 'id3',
            headerName: 'LINK',
            headerClassName: 'super-theme',
            width: 250,
        },
    ];

    return (
        <>

            <Container>
                <br />
                <br />
                <Row>
                    <Col md={2}></Col>
                    <Col md={7}>
                        <form className="example">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><SearchOutlined /></button>
                        </form>
                    </Col>
                    <Col md={1} style={{ textAlign: "center" }}><Button variant="outlined" style={{
                        height: "35px",
                        width: "100%",
                        padding: "5px",
                        border: "1px solid red",
                        borderradius: "4px",
                        fontWeight: "600",
                        color: "red",
                    }}>DELETE</Button></Col>
                    <Col md={1} style={{ textAlign: "center" }}><Button style={{
                        height: "35px",
                        width: "100%",
                        padding: "5px",
                        backgroundColor: "green",
                        border: "1px solid green",
                        borderradius: "4px",
                        fontWeight: "600",
                        color: "white",
                    }}>ADD</Button></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
            <div style={{ margin: "5px" }}>
                <br />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} >
                        <TableHead>
                            <TableRow style={{ backgroundColor: "red" }}>
                                <StyledTableCell><input type="checkbox" /></StyledTableCell>
                                <StyledTableCell>TITLE</StyledTableCell>
                                <StyledTableCell >POSTED ON</StyledTableCell>
                                <StyledTableCell >SECTION &#62; SUB SECTION</StyledTableCell>
                                <StyledTableCell >LINK</StyledTableCell>
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
                                    <StyledTableCell >{row.calories}</StyledTableCell>
                                    <StyledTableCell >{row.fat}</StyledTableCell>
                                    <StyledTableCell >{row.carbs}</StyledTableCell>
                                    <StyledTableCell >{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
}

export default ArticlesList
