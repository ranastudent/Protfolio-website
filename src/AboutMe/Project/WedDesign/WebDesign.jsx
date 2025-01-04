import React from 'react';
import WedDesignCard from '../WebDesignCard/WedDesignCard';

const WebDesign = () => {
      const data = [
            {
                  "id": "1",
                  "image": "https://i.ibb.co.com/7CJMCWL/B10A2.png",
                  "heading": "Join Gym Club",
                  "title": "Join Our Gym Club For Your Health",
                  "websiteLiveLink": "https://ranastudent.github.io/B10A2-versatile-ui-assingment/",
                  "clientSide": "https://github.com/ranastudent/B10A2-versatile-ui-assingment",
                  "description": " Passionate about building scalable web applications and working with cutting-edge technologies. This a Simple Web design for Gym Page ",
                  "technology": [
                        
                       
                        "HTML",
                        "CSS",
                        "Tailwind",
                        "Git",
                        
                  ]
            },
            {
                  "id": "2",
                  "image": "https://i.ibb.co.com/K5CPLHX/B10A6.png",
                  "heading": "Adopt Pet",
                  "title": "Here we Provide Your Desire Pet",
                  "websiteLiveLink": "https://amazing-torrone-64ecb7.netlify.app/",
                  "clientSide": "https://github.com/programming-hero-web-course2/b10a6-pet-adoption-ranastudent",
                  "description": " Passionate about building scalable web applications and working with cutting-edge technologies. This is Simple Front End Web Page For Adopt Pet",
                  "technology": [
                        
                       
                        "HTML",
                        "javaScript",
                        "React",
                        "CSS",
                        "Tailwind",
                        "Git",
                       
                  ]
            }
      ]
      return (
            <div>
                  <WedDesignCard data={data}></WedDesignCard>
            </div>
      );
};

export default WebDesign;