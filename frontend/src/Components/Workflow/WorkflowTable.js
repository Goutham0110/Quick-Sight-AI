import React from "react";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { workflowActions } from "../../Store/workflowSlice";


export default function WorkflowTable({ workflows }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openWorkflow = (workflowId) => {
        //get workflow
        dispatch(workflowActions.setWorkflow({id:workflowId}))
        navigate(`/workspace`)
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TableContainer component={Paper} sx={{ display: "flex", width: "95vw" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: "5%" }}>ID</TableCell>
                            <TableCell sx={{ width: "30%" }}>Name</TableCell>
                            <TableCell sx={{ width: "20%" }}>Status</TableCell>
                            <TableCell sx={{ width: "15%" }}>Created at</TableCell>
                            <TableCell sx={{ width: "15%" }}>Updated at</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {workflows?.map((row) => (
                            <TableRow
                                key={row.id}
                                onClick={() => { openWorkflow(row.id) }}
                            >
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>{row.created_at}</TableCell>
                                <TableCell>{row.updated_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
