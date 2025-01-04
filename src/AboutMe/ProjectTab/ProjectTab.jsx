import React from 'react';
import FullStack from '../Project/FullStack/FullStack';
import Frontend from '../Project/Frontend/Frontend';
import WebDesign from '../Project/WedDesign/WebDesign';



const ProjectTab = () => {
      return (
            <div id='projects' className="flex justify-center items-center min-h-screen">
                  <div role="tablist" className="tabs tabs-lifted text-center w-full">
                        <input type="radio" name="my_tabs_2" role="tab" className="tab text-red-600 text-2xl" aria-label="Full Stack (MERN)" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full text-left">
                              <FullStack></FullStack>
                        </div>


                        <input
                              type="radio"
                              name="my_tabs_2"
                              role="tab"
                              className="tab text-red-600 text-2xl"
                              aria-label="Frontend (REACT)"
                              defaultChecked
                        />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full text-left">
                              <Frontend></Frontend>
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab text-red-600 text-2xl" aria-label="Web Design" />
                        <div role="Web design(HTML , CSS, Tailwind)" className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full text-left">
                              <WebDesign></WebDesign>
                        </div>
                  </div>
            </div>
      );
};

export default ProjectTab;
