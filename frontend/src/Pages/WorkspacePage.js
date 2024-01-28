import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from 'react-redux'

export default function WorkSpacePage() {
  const workflow = useSelector((state) => state.workflow.id)

  return (
    <>
      {workflow ?
        <Typography variant="h5">
          This is workspace of worflow id {workflow}
        </Typography> :
        <Typography variant="h5">
          This is a workspace to create new workflow
        </Typography>
      }

    </>
  );
}
