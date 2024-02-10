import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux'

export default function WorkSpacePage() {
  const architecture = useSelector((state) => state.architecture.id)

  return (
    <>
      {architecture ?
        <Typography variant="h5">
          This is workspace of worflow id {architecture}
        </Typography> :
        <Typography variant="h5">
          This is a workspace to create new architecture
        </Typography>
      }

    </>
  );
}
