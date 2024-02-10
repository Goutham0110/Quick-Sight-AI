import React from "react";
import { Button, Grid, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { architectureActions } from "../../Store/architectureSlice";

export default function ArchitectureHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    dispatch(architectureActions.clear());
    navigate("/workspace")
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
      <Grid container sx={{ width: "90vw", display: "flex", justifyContent: "space-between" }}>
        <Grid item>
          <Typography variant="h4">
            Architectures
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleCreate}>Create Architecture</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
