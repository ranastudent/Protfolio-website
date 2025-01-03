import React, { useState, useEffect } from 'react';
import './Banner.css'; // Make sure to import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Web developer', 'React developer', 'MERN developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row-reverse w-full lg:w-3/4">
        <img 
          src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.15752-9/467483607_2296800607357094_1572334001578826737_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=kxBfRbjVqjkQ7kNvgFTdE0c&_nc_oc=Adg3rMSAZuSgW_rwplci73yxaf3JNsEj86Cj8XjWF_UDiiO19q1z9fPbyXBJjRo-ldY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&oh=03_Q7cD1gFLWd_wVePDqAbtIwciaboaTgBtQASeMLbSBym3-5f9vw&oe=679FA9EA"
          className="max-w-sm rounded-lg shadow-2xl image-animation"
          alt="Banner"
        />
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Hi I am Reduanul Islam <br />
            <span className="text-animation text-orange-300">{texts[textIndex]}</span>
          </h1>
          <p className="py-6 text-center lg:text-left">
            Welcome to my portfolio, where I demonstrate my technical skills, problem-solving mindset, teamwork abilities, love for learning, attention to detail, and strong work commitment. With a passion for technology, I thrive in challenging environments and excel at finding innovative solutions. Collaboration is crucial to me. I continuously expand my knowledge, staying updated with industry trends. Meticulousness is my forte. Above all, my unwavering commitment drives me to surpass expectations, delivering exceptional outcomes. Explore my portfolio to witness the manifestation of my expertise, collaboration, and dedication to technology-driven solutions.
          </p>
          <a className="btn btn-primary text-center p-4" href="https://docs.google.com/document/d/1ku1V4bRooWEpH-yqSuQ9oYsjUYGhir5wcIUTaG-Qt5E/export?format=pdf" target="_blank" rel="noopener noreferrer" > Download Resume </a>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/reduanul.islam.5680" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://github.com/ranastudent" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/reduanul-islam-801363295/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
