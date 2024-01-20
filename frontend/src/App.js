import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HttpStatusCode } from "axios";
import GlobalStyles from "@mui/material/GlobalStyles";
import models from "./constants";
import RootLayout from "./Layouts/RootLayout";
import ErrorPageLayout from "./Layouts/ErrorPageLayout";
import HomePage from "./Pages/HomePage";

const errorRoutes = [
  {
    path: "/internal-server-error",
    element: (
      <ErrorPageLayout
        code={HttpStatusCode.InternalServerError}
        header={"Internal server Error"}
      />
    ),
  },
  {
    path: "/server-not-found",
    element: (
      <ErrorPageLayout
        code={HttpStatusCode.NotFound}
        header={"Server Not Found"}
      />
    ),
  },
  {
    path: "/bad-request",
    element: (
      <ErrorPageLayout
        code={HttpStatusCode.BadRequest}
        header={"Bad Request Error"}
      />
    ),
  },
  {
    path: "*",
    element: (
      <ErrorPageLayout
        code={HttpStatusCode.NotFound}
        header={"Page not found"}
      />
    ),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/docs", element: <></> },
      { path: "/upload-data", element: <></> },
      { path: "/workspace", element: <></> }
    ],
  },
  errorRoutes.map((route) => route),
]);

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          "*::-webkit-scrollbar": {
            width: "0.4em",
            "z-index": "-2",
          },
          "*::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            borderRadius: "50px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(0,0,0,.3)",
          },
        }}
      />
      <RouterProvider router={router} fallbackElement={<></>} />
    </>
  );
}

export default App;
