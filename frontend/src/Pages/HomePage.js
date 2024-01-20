import React from "react";
import {
  Typography,
  Grid,
  Box,
  Divider,
  Button,
} from "@mui/material";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import homepageDescriptionImg from "../Assets/homepageDescription.jpg";

export default function HomePage() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box>
            <Grid container>
              <Grid
                item
                lg={6}
                md={12}
                xs={12}
                sx={{
                  display: "flex",
                  height: "75vh",
                  alignItems: "center",
                  paddingLeft: "7vh",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h1">QuickSightAI</Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="subtitle1">
                      Unleash the power of predictive modellling effortlessly
                      with automated AI, real-time 2D Image processing, and a
                      user-friendly interface. Democratizing machine learning
                      for seamless data analysis.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" size="large">
                      Get Started
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                lg={6}
                md={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box
                  component={"img"}
                  src={homepageDescriptionImg}
                  sx={{ height: "75vh", zIndex: "-1" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "3vh",
              }}
            >
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowDropDownCircleOutlinedIcon fontSize="large" />}
              >
                Explore
              </Button>
            </Grid>
            <Grid item>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
      <Box height="50vh"></Box>
    </>
  );
}
