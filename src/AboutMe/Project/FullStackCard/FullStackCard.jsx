import React from 'react';
import { FaEye } from 'react-icons/fa';

const FullStackCard = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden m-4 w-full md:w-2/3">
          <div className="md:w-1/3">
            <img src={item.image} alt={item.heading} className="w-full h-full object-cover" />
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
            <h3 className="text-xl mb-2">{item.title}</h3>
            <p className="mb-4">{item.description}</p>
            <div className="mb-4">
              <h4 className="font-bold">Technologies Used:</h4>
              <ul className="list-disc list-inside">
                {item.technology.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              <a
                href={item.websiteLiveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <FaEye className="mr-2" /> Live Site
              </a>
              <a
                href={item.clientSide}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <FaEye className="mr-2" /> Client Side
              </a>
              <a
                href={item.serverSide}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <FaEye className="mr-2" /> Server Side
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullStackCard;
