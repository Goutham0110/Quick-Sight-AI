import React from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  Avatar,
  Divider,
  Button,
} from "@mui/material";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import homepageDescriptionImg from "../Assets/homepageDescription.jpg";
import exploratoryDataAnalysisImg from "../Assets/exploratoryDataAnalysis.jpg";
import machineLearningImg from "../Assets/machineLearning.jpg";
import imageProcessingImg from "../Assets/imageProcessing.jpg";
import CardMenu from "../Components/TitleCard";
import models from "../constants";
import ListCard from "../Components/ListCard";

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
                <Grid container spacing={2}>
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
        {/* <Grid item xs={12}>
          <Divider />
        </Grid> */}
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
                Explore Now
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "3vh",
              }}
            >

              <Grid
                container
                xs={12}
                sx={{
                  '& > *': {
                    p: 3,
                    m: 1,
                    width: '95vw',
                    minHeight: '50vh',
                    display: "flex",
                    alignItems: "center"
                  }
                }}
              >
                <Paper
                  variant="outlined"
                >
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={3}>
                        <CardMenu
                          title={"Data Analysis"}
                          img={exploratoryDataAnalysisImg}
                          desc={""}
                        />
                      </Grid>
                      <Grid item xs={9} sx={{display:"flex", flexWrap:"wrap"}}>
                        {models.dataAnalysis.map((model, index) => {
                          return <ListCard key={index} title={model.label} />
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  variant="outlined"
                >
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={3}>
                        <CardMenu
                          title={"Image Processing"}
                          img={imageProcessingImg}
                          desc={""}
                        />
                      </Grid>
                      <Grid item xs={9} sx={{display:"flex", flexWrap:"wrap"}}>
                        {models.imageProcessing.map((model,index)=>{
                          return <ListCard key={index} title={model.label} />
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
                <Paper
                  variant="outlined"
                >
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={3}>
                        <CardMenu
                          title={"Machine Learning"}
                          img={machineLearningImg}
                          desc={""}
                        />
                      </Grid>
                      <Grid item xs={9} sx={{display:"flex", flexWrap:"wrap"}} >
                        {models.machineLearning.map((model, index) => {
                          return <ListCard key={index} title={model.label} />
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
      <Box height="50vh"></Box>
    </>
  );
}
