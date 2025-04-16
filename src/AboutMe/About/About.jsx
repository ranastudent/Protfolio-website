import React from 'react';
import Skill from '../Skill/Skill';
import { Outlet } from 'react-router-dom';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import ContactMe from '../ContactMe/ContactMe';


const About = () => {
      return (
            <div>
                  <Skill></Skill>
                  <Outlet></Outlet>
                  <PersonalInfo></PersonalInfo>
                  <ContactMe></ContactMe>
            </div>
      );
};

export default About;