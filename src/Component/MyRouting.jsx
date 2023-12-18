import { createBrowserRouter, redirect } from "react-router-dom"

import App from "../Page/App"
import Main from "../Page/Main"
import ForbiddenPage from "../Page/Error/Forbidden"
import ServerErrorPage from "../Page/Error/ServerError"
import NotFoundPage from "../Page/Error/NotFound"
import Unauthorized from "../Page/Error/Unauthorized"
import ShowTable from "../Page/Sample/ShowTable"
import FormCondition from "../Page/Sample/FormCondition"
import MySteper from '../Page/Sample/Steper'
import NestedList from "../Page/Sample/NestedList"
import Tags from "../Page/Sample/Tags"
import CustomButton from "../Page/Test/CustomButton"
import ShowButtons from "../Page/Sample/Buttons"

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
        element: <NestedList></NestedList>
      },
      {
        path: "sample/tags",
        element: <Tags></Tags>
      },
      {
        path: "sample/buttons",
        element: <ShowButtons></ShowButtons>
      },
      {
        path: "test/permission",
        element: <ShowTable></ShowTable>,
        loader: handleLoginFail,
      },
      {
        path: "test/button",
        element: <CustomButton></CustomButton>
      },
      {
        path: "error/401",
        element: <Unauthorized></Unauthorized>
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