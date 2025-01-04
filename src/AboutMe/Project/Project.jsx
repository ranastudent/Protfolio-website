import { Outlet } from "react-router-dom";


const Project = () => {
      return (
            <div>
                  <h2 className="text-4xl text-center">Project</h2>
                  <div className="divider bg-orange-500 rounded-2xl"></div>
                  <Outlet></Outlet>
                  
                  
            </div>
      );
};

export default Project;