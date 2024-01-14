import React from "react";
import models from "../constants";
import NavbarMenu from "./NavbarMenu";
import { Grid, AppBar, Toolbar, Typography } from "@mui/material";

export default function RootLayout() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <AppBar color="primary">
            <Toolbar>
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={1.5}>
                  <Typography variant="h6">QuickSight AI</Typography>
                </Grid>
                <Grid
                  item
                  xs={10.5}
                  sx={{
                    "& button": {
                      color: "#ffffff",
                      marginX: 1,
                      fontSize: "1.5vh",
                    },
                  }}
                >
                  <NavbarMenu
                    label={"Data Analysis"}
                    id={"data-analysis"}
                    menu={models.dataAnalysis}
                  />
                  <NavbarMenu
                    label={"Image Processing"}
                    id={"image-processing"}
                    menu={models.imageProcessing}
                  />
                  <NavbarMenu
                    label={"Supervised Learning"}
                    id={"supervised-learning"}
                    menu={models.supervised}
                  />
                  <NavbarMenu
                    label={"Unsupervised Learning"}
                    id={"unsupervised-learning"}
                    menu={models.unsupervised}
                  />
                  <NavbarMenu
                    label={"Neural Networks"}
                    id={"neural-networks"}
                    menu={models.neuralNetworks}
                  />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid item></Grid>
      </Grid>
    </>
  );
}
