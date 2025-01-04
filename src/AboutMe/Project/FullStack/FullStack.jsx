import React from 'react';
import FullStackCard from '../FullStackCard/FullStackCard';

const FullStack = () => {
      const data = [
            {
                  "id": "1",
                  "image": "https://i.ibb.co.com/wKwJ8R6/B10A11.png",
                  "heading": "Marathon Event Creating Page",
                  "title": "Marathon",
                  "websiteLiveLink": "https://b10-a11-auth.web.app/",
                  "clientSide": "https://github.com/programming-hero-web-course2/b10a11-client-side-ranastudent",
                  "serverSide": "https://github.com/programming-hero-web-course2/b10a11-server-side-ranastudent",
                  "description": "Experienced Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). Passionate about building scalable web applications and working with cutting-edge technologies. This a Simple Marathon Race event create and apply Website",
                  "technology": [
                        "MongoDB",
                        "Express.js",
                        "React",
                        "Node.js",
                        "JavaScript",
                        "JWT",
                        "HTML",
                        "CSS",
                        "Tailwind",
                        "Git",
                        
                  ]
            },
            {
                  "id": "2",
                  "image": "https://i.ibb.co.com/HNGCcmL/B10A10.png",
                  "heading": "Fund Rise And Donate Page",
                  "title": "Crowd Funding",
                  "websiteLiveLink": "https://b10-a10-auth-ce68e.web.app/home",
                  "clientSide": " https://github.com/ranastudent/B10-A10-Client-Site",
                  "serverSide": "https://github.com/programming-hero-web-course2/b10-a10-server-side-ranastudent",
                  "description": "Experienced Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). Passionate about building scalable web applications and working with cutting-edge technologies. This is Simple Funding Rise And Fund Giving WebSite ",
                  "technology": [
                        "MongoDB",
                        "Express.js",
                        "React",
                        "Node.js",
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
                  <FullStackCard data={data}></FullStackCard>
            </div>
      );
};

export default FullStack;