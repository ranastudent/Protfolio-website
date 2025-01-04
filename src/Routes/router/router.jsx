import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import About from "../../AboutMe/About/About";
import Project from "../../AboutMe/Project/Project";
import ProjectTab from "../../AboutMe/ProjectTab/ProjectTab";

const router = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                  path:'/',
                  element:<About></About>,
                  children: [
                    {
                      path:'/',
                      element:<Project></Project>,
                      children:[
                        
                          {
                            path:'/',
                            element:<ProjectTab></ProjectTab>,
                          },
                        
                      ]
                    },
                    
                ]
            },
            
        ]
      },
    ]);

export default router;