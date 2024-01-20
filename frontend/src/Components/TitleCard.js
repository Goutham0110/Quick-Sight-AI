import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export default function TitleCard({ img, title, desc }) {
  return (
    <>
      <Card sx={{ width: "40vh" }}>
        <CardActionArea>
          <CardMedia component="img" image={img} sx={{ height: "30vh" }} />
          <CardContent sx={{ p: 3, height: "10vh", bgcolor: "ButtonFace" }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
