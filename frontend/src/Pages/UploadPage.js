import React from "react";
import {
    Typography,
    Grid,
    Box,
    Paper,
    Button,
} from "@mui/material";
import uploadImg from "../Assets/upload.jpg"
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
    const [uploadedFile, setUploadedFile] = React.useState("");
    const navigate = useNavigate();

    const openFileUploader = () => {
        document.getElementById('fileInput').click();
    }
    const handleFileUpload = (event) => {
        const uploadedFiles = event.target.files[0];
        console.log(uploadedFiles)
        setUploadedFile(uploadedFiles.name)
    }
    const navigateToWorkspace = () => {
        navigate("/workspace");
    }

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", m: 5 }}>
                <Paper
                    elevation={12}
                    onClick={!uploadedFile?.length ? openFileUploader : () => { }}
                    sx={{
                        display: "flex",
                        paddingX: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "75vh",
                        width: "75vw",
                        bgcolor: "ThreeDFace"
                    }}>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileUpload}
                        style={{
                            display: "none",
                        }} />
                    <Grid container spacing={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            '& > *': {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }
                        }}>
                        {
                            !uploadedFile?.length ?
                                <>

                                    <Grid item xs={12}>
                                        <Typography component={"div"} variant="h5">
                                            Upload your dataset
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box
                                            component={"img"}
                                            src={uploadImg}
                                            sx={{ height: "25vh", borderRadius: "15px" }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component={"div"} variant="h5">
                                            Click or Drag and Drop here
                                        </Typography>
                                    </Grid>
                                </>
                                :
                                <>
                                    <Grid item xs={12}>
                                        <Typography component={"div"}>
                                            {uploadedFile} has been uploaded successfully!
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" size="large" onClick={navigateToWorkspace}>
                                            Go to workspace
                                        </Button>
                                    </Grid>
                                </>

                        }
                    </Grid>

                </Paper>
            </Box>
        </>
    );
}
