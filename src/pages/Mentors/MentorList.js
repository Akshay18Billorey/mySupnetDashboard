import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

import Button from '@material-ui/core/Button';
import { Form } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function MentorList() {
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
    const MENTORS_COL = [
        {
            field: 'id',
            headerName: 'NAME',
            editable: true,
            headerClassName: 'super-theme',
            width: 120,
        },
        {
            field: 'id1',
            headerName: 'M/F',
            headerClassName: 'super-theme',
            width: 120,
        },
        {
            field: 'id4',
            headerName: 'CONDITION',
            headerClassName: 'super-theme',
            width: 105,
        },
        {
            field: 'id5',
            headerName: 'YEAR',
            headerClassName: 'super-theme',
            width: 100,
        },
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            headerClassName: 'super-theme',
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    alert(params);
                };
                return <Button variant="outlined" style={{
                    // height: "25px",
                    width: "100%",
                    padding: "5px",
                    // backgroundColor: "green",
                    border: "1px solid gray",
                    borderradius: "4px",
                    fontWeight: "600",
                    color: "gray",
                }} onClick={onClick}>DELETE</Button>;
            }
        },
    ];

    const MENTORS_DATA = [
        { id: 'xyz', id1: 'xyz', id2: 'xyz', id3: 'xyz', id4: 'xyz', id5: 'xyz', id6: 'xyz', firstName1: 'xyz', lastName: 'xyz', firstName: 'xyz', age: 'xyz' },
        // { id: 'xyzz', id1: 'xyz', id2: 'xyz', id3: 'xyz', id4: 'xyz', id5: 'xyz', id6: 'xyz', firstName1: 'xyz', lastName: 'xyz', firstName: 'xyz', age: 'xyz' },
        // { id: 'xyzy', id1: 'xyz', id2: 'xyz', id3: 'xyz', id4: 'xyz', id5: 'xyz', id6: 'xyz', firstName1: 'xyz', lastName: 'xyz', firstName: 'xyz', age: 'xyz' },
    ];
    const MENTEES_COL = [
        {
            field: 'id',
            headerName: 'NAME',
            editable: true,
            headerClassName: 'super-theme',
            width: 120,
        },
        {
            field: 'id1',
            headerName: 'M/F',
            headerClassName: 'super-theme',
            width: 120,
        },
        {
            field: 'id4',
            headerName: 'CONDITION',
            headerClassName: 'super-theme',
            width: 100,
        },
        {
            field: 'id5',
            headerName: 'YEAR',
            headerClassName: 'super-theme',
            width: 105,
        },
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            headerClassName: 'super-theme',
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    alert(params);
                };
                return <Button variant="outlined" style={{
                    // height: "25px",
                    width: "100%",
                    padding: "5px",
                    // backgroundColor: "green",
                    border: "1px solid red",
                    borderradius: "4px",
                    fontWeight: "600",
                    color: "red",
                }} onClick={onClick}>DELETE</Button>;
            }
        },
    ];

    const MENTEES_DATA = [
        { id: 'xyz', id1: 'xyz', id2: 'xyz', id3: 'xyz', id4: 'xyz', id5: 'xyz', id6: 'xyz', firstName1: 'xyz', lastName: 'xyz', firstName: 'xyz', age: 'xyz' },
        { id: 'xyzz', id1: 'xyz', id2: 'xyz', id3: 'xyz', id4: 'xyz', id5: 'xyz', id6: 'xyz', firstName1: 'xyz', lastName: 'xyz', firstName: 'xyz', age: 'xyz' },
        { id: 'xyzy', id1: 'xyz', id2: 'xyz', id3: 'xyz', id4: 'xyz', id5: 'xyz', id6: 'xyz', firstName1: 'xyz', lastName: 'xyz', firstName: 'xyz', age: 'xyz' },
    ];
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <br />
                            <Row>
                                <Col md={2}>
                                    MySupnet
                                </Col>
                                <Col md={10}>
                                    <h4 style={{ color: "#4078a6" }}>MENTORS</h4>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col md={8}>
                                    <Form.Select aria-label="Default select example" style={{
                                        display: "flex",
                                        flexwrap: "wrap",
                                        height: "35px",
                                        width: "100%",
                                        padding: "5px",
                                        border: "1px solid green",
                                        borderradius: "4px",
                                    }}>
                                        <option>Select Member</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col md={4}>
                                    <Button variant="outlined" style={{
                                        height: "35px",
                                        width: "100%",
                                        padding: "5px",
                                        backgroundColor: "green",
                                        border: "1px solid green",
                                        borderradius: "4px",
                                        fontWeight: "600",
                                        color: "white",
                                    }}>Make Mentor</Button>
                                </Col>
                            </Row>
                        </Container>
                        <br />
                        <Box
                            sx={{
                                height: 400,
                                width: 1,
                                '& .super-theme': {
                                    backgroundColor: 'rgba(246,246,246,255)', color: "rgba(64,120,166,255)",
                                },
                            }}
                        >
                            <DataGrid
                                rows={MENTORS_DATA}
                                columns={MENTORS_COL}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                // checkboxSelection
                                disableSelectionOnClick
                            />
                        </Box>

                    </Col>
                    <Col>
                        <Container>
                            <br />
                            <h4 style={{ color: "#4078a6" }}>MENTEE</h4>
                            <br />
                            <Row>
                                <Col md={7}>
                                    <Form.Select aria-label="Default select example" style={{
                                        display: "flex",
                                        flexwrap: "wrap",
                                        height: "35px",
                                        width: "100%",
                                        border: "1px solid green",
                                        borderradius: "4px",
                                    }}>
                                        <option>Select Member</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col md={5}>
                                    <Button variant="outlined" style={{
                                        height: "35px",
                                        width: "100%",
                                        backgroundColor: "green",
                                        border: "1px solid green",
                                        borderradius: "4px",
                                        fontWeight: "600",
                                        color: "white",
                                    }}>ASSIGN AS MENTEE</Button>
                                </Col>
                            </Row>
                        </Container>
                        <br />

                        <Box
                            sx={{
                                height: 400,
                                width: 1,
                                '& .super-theme': {
                                    backgroundColor: 'rgba(246,246,246,255)', color: "rgba(64,120,166,255)",
                                },
                            }}
                        >
                            <DataGrid
                                rows={MENTEES_DATA}
                                columns={MENTEES_COL}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                // checkboxSelection
                                disableSelectionOnClick
                            />
                        </Box>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MentorList
