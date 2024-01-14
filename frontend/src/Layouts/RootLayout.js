import React from "react";
import models from "../constants";
import { Grid, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

export default function RootLayout() {
  const [path, setPath] = React.useState("/");
  const navigate = useNavigate();

  const handleClick = (path) => {
    setPath(path);
  };

  React.useEffect(() => {
    console.log("path", path);
    navigate(path);
  }, [path]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <AppBar>
            <Toolbar>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingX: "3vh",
                }}
              >
                <Grid item xs={6}>
                  <Typography variant="h6">QuickSight AI</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingX: "10vh",
                    }}
                  >
                    <Grid item>
                      <Button
                        sx={{ color: "AppWorkspace" }}
                        onClick={() => handleClick("/")}
                      >
                        Home
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        sx={{ color: "AppWorkspace" }}
                        onClick={() => handleClick("/docs")}
                      >
                        Docs
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid item xs={12} sx={{ marginTop: "8vh" }}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
