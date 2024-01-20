import {
    Card,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";
import React from "react";

export default function ListCard({ img, title, desc }) {
    return (
        <>
            <Card sx={{ display: "flex", minWidth: 350, height: "10vh", m: 2 }}>
                <CardMedia component="img" image={img} sx={{ width: 100 }} />
                <CardContent sx={{ p: 3, minWidth: 250 }}>
                    <Typography variant="h6" component={"div"}>
                        {title}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
