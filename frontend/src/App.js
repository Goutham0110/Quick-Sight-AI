import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HttpStatusCode } from "axios";
import models from "./constants";
import RootLayout from "./Layouts/RootLayout";
import ErrorPageLayout from "./Layouts/ErrorPageLayout";
import HomePage from "./Pages/HomePage";
import UploadPage from "./Pages/UploadPage";
import WorkSpacePage from "./Pages/WorkspacePage";

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
      { path: "/upload", element: <UploadPage /> },
      { path: "/workspace", element: <WorkSpacePage /> },
      { path: "/docs", element: <></> }
    ],
  },
  errorRoutes.map((route) => route),
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<></>} />;
}

export default App;
