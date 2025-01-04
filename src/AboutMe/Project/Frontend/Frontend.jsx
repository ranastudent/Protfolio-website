import React from 'react';
import FrontendCard from '../FrontendCard/FrontendCard';

const Frontend = () => {
      const data = [
            {
                  "id": "1",
                  "image": "https://i.ibb.co.com/kxDJJMH/B10A9PNG.png",
                  "heading": "Donation Winter Cloth",
                  "title": "Donate Cloth For Poor people",
                  "websiteLiveLink": "https://winter-donation-auth.web.app/",
                  "clientSide": "https://github.com/programming-hero-web-course1/b10-a9-authentication-ranastudent",
                  "description": " Passionate about building scalable web applications and working with cutting-edge technologies. This a Simple Website for Donate Winter Clothe For helpless people, please Donate Your Cloth For those People ",
                  "technology": [
                        
                        "React",
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "Tailwind",
                        "Git",
                        
                  ]
            },
            {
                  "id": "2",
                  "image": "https://i.ibb.co.com/gjG1cCW/B10A8.png",
                  "heading": "Gadget You Want",
                  "title": "Visit Here To Find Your Desire Gadget",
                  "websiteLiveLink": "https://b10-a10-auth-ce68e.web.app/home",
                  "clientSide": " https://github.com/programming-hero-web-course-4/b10a8-gadget-heaven-ranastudent",
                  "description": "This is Simple Frontend Website  for buying and Selling Gadget",
                  "technology": [
                        
                        "React",
                        
                        "JavaScript",
                        "HTML",
                        "CSS",
                        "Tailwind",
                        "Git",
                       
                  ]
            }
      ]
      return (
            <div>
                  <FrontendCard data={data}></FrontendCard>
            </div>
      );
};

export default Frontend;