import { createBrowserRouter, redirect } from "react-router-dom"
import App from "../Page/App"
import App2 from "../Page/App2"
import Main from "../Page/Main"
import ForbiddenPage from "../Page/Error/Forbidden"
import ServerErrorPage from "../Page/Error/ServerError"
import NotFoundPage from "../Page/Error/NotFound"
import ShowTable from "../Page/Sample/ShowTable"
import FormCondition from "../Page/Sample/FormCondition"
import MySteper from '../Page/Sample/Steper'
import Test from "../Page/Sample/Test"

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
        element: <ShowTable></ShowTable>,
        loader: handleLoginSuccess,
      },
      {
        path: "sample/form",
        element: <FormCondition></FormCondition>
      },
      {
        path: "sample/steper",
        element: <MySteper></MySteper>
      },
      {
        path: "sample/nested",
        element: <Test></Test>
      },
      {
        path: "test/permission",
        element: <ShowTable></ShowTable>,
        loader: handleLoginFail,
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
  }
])