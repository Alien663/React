import { createBrowserRouter, redirect } from "react-router-dom"
import App from "../Page/App"
import App2 from "../Page/App2"
import Main from "../Page/Main"
import SamplePage from "../Page/Sample"
import FormSample from "../Page/FormSample"
import ForbiddenPage from "../Page/Error/Forbidden"
import ServerErrorPage from "../Page/Error/ServerError"
import NotFoundPage from "../Page/Error/NotFound"
import Test from "../Page/Test"

const handleLoginSuccess = async () => {
  return null
}

const handleLoginFail = async () => {
  return redirect("/error/403")
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "sample",
        element: <SamplePage></SamplePage>,
        loader: handleLoginSuccess,
      },
      {
        path: "sample/form",
        element: <FormSample></FormSample>
      },
      {
        path: "test/permission",
        element: <SamplePage></SamplePage>,
        loader: handleLoginFail,
      },
      {
        path: "test",
        element: <Test></Test>
      },
      {
        path: "error/403",
        element: <ForbiddenPage></ForbiddenPage>
      },
      {
        path: "error/500",
        element: <ServerErrorPage></ServerErrorPage>
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>
      },
    ]
  },
  {
    path: "/v2",
    element: <App2></App2>,
  },
])