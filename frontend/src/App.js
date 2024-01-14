import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HttpStatusCode } from "axios";
import models from "./constants";
import RootLayout from "./Layouts/RootLayout";
import ErrorPageLayout from "./Layouts/ErrorPageLayout";

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
      { index: true, element: <></> },
      models.dataAnalysis.map((route) => route),
      models.imageProcessing.map((route) => route),
      models.supervised.map((route) => route),
      models.unsupervised.map((route) => route),
      models.neuralNetworks.map((route) => route),
    ],
  },
  errorRoutes.map((route) => route),
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<></>} />;
}

export default App;
