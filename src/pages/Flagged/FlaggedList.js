import * as React from 'react';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
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
function FlaggedList() {
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

    return (
        <>
            <Container>
                <br />
                <br />
                <Row>
                    <Col md={2}>MySupnet</Col>
                    <Col md={8}>
                        <form className="example">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><SearchOutlined /></button>
                        </form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
            <div style={{ margin: "5px" }}>
                <br />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} >
                        <TableHead>
                            <TableRow style={{ backgroundColor: "red" }}>
                                <StyledTableCell><input type="checkbox" /></StyledTableCell>
                                <StyledTableCell>POST</StyledTableCell>
                                <StyledTableCell >POSTED ON</StyledTableCell>
                                <StyledTableCell >AUTHOR</StyledTableCell>
                                <StyledTableCell >FLAGGED BY</StyledTableCell>
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

export default FlaggedList
