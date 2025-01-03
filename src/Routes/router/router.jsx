import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import About from "../../AboutMe/About/About";

const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                  path:'/',
                  element:<About></About>
            }
        ]
      },
    ]);

export default router;