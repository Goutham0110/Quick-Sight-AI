import React from "react";
import grapesjs from "grapesjs";
import websitePlugin from 'grapesjs-preset-webpage';
import basicBlockPlugin from 'grapesjs-blocks-basic';
import formPlugin from 'grapesjs-plugin-forms';
import 'grapesjs/dist/css/grapes.min.css';
import { Box, Typography } from "@mui/material";

export default function Editor() {

  React.useEffect(() => {
    grapesjs.init({
      container: '#gjs',
      width: '100%',
      plugins: [websitePlugin, basicBlockPlugin, formPlugin],
    })
  }, [])

  return (
    <>
      <Box id="gjs">
      </Box>
    </>
  );
}
