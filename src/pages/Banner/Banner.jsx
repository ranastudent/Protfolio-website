import React, { useState, useEffect } from 'react';
import './Banner.css'; // Ensure CSS file is in the same directory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Web Developer', 'React Developer', 'MERN Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDownloadClick = () => {
    Swal.fire({
      title: 'Are you sure you want to download the resume?',
      showCancelButton: true,
      confirmButtonText: 'Download',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement('a');
        link.href = 'https://acrobat.adobe.com/id/urn:aaid:sc:ap:9722d2f5-ed57-4f8a-909f-72be96042411'; // Replace with your actual resume link
        link.setAttribute('download', 'Reduanul_Islam_Resume.pdf'); // Set download name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  return (
    <div id="home" className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row-reverse w-full lg:w-3/4">
        
        {/* Image Section */}
        <img 
          src="https://i.ibb.co.com/DgCRGVs4/467483607-2296800607357094-1572334001578826737-n.jpg" // Replace with a valid image URL or move image to /public folder
          className="max-w-sm rounded-lg shadow-2xl image-animation"
          alt="Banner"
        />

        {/* Text & Buttons */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Hi, I am Reduanul Islam <br />
            <span className="text-animation text-orange-500">{texts[textIndex]}</span>
          </h1>
          <p className="py-6 text-center lg:text-left">
            Welcome to my portfolio, where I showcase my technical skills, problem-solving mindset, teamwork abilities, and commitment to continuous learning. With a passion for technology, I thrive in challenging environments and excel at finding innovative solutions.
          </p>
          <button className="btn btn-primary text-center p-4" onClick={handleDownloadClick}>
            Download Resume
          </button>

          {/* Social Icons */}
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
