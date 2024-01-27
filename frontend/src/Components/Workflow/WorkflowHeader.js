import React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UseDispatch, useDispatch } from "react-redux";
import { workflowActions } from "../../Store/workflowSlice";

export default function WorkflowHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    dispatch(workflowActions.clear());
    navigate("/workspace")
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
      <Grid container sx={{ width: "90vw", display: "flex", justifyContent: "space-between" }}>
        <Grid item>
          <Typography variant="h4">
            Workflows
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleCreate}>Create Workflow</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
