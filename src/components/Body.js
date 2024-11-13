import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services"
import StartProject from "./StartProject";
import Footer from "./Footer";



const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/About",
            element:<About/>
        },
        {
            path:"/Projects",
            element:<Projects/>
        },
        {
            path:"/Services",
            element:<Services/>
        },
        {
            path:"/StartProject",
            element:<StartProject/>
        },
        {
            path:"/Footer",
            element:<Footer/>
        },


    ])

  return (
    <div>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </div>
  )
}

export default Body
