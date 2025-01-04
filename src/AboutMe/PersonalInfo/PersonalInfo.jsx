import React from 'react';

const PersonalInfo = () => {
  return (
    <div id='about'>
      <h2 className="text-3xl text-center underline">About Me</h2>
      <div className="flex flex-wrap justify-between mt-6">
        <div className="w-full md:w-1/3 p-4">
        <img 
          src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.15752-9/467483607_2296800607357094_1572334001578826737_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=kxBfRbjVqjkQ7kNvgFTdE0c&_nc_oc=Adg3rMSAZuSgW_rwplci73yxaf3JNsEj86Cj8XjWF_UDiiO19q1z9fPbyXBJjRo-ldY&_nc_zt=23&_nc_ht=scontent.fdac5-1.fna&oh=03_Q7cD1gFLWd_wVePDqAbtIwciaboaTgBtQASeMLbSBym3-5f9vw&oe=679FA9EA"
          className="max-w-sm rounded-lg shadow-2xl "
          alt="Profile"
        />
        </div>
        <div className="w-full md:w-2/3 p-4">
          <h3 className="text-2xl font-bold mb-4">Personal Info</h3>
          <p><strong>Name:</strong> Reduanul Islam</p>
          <p><strong>Age:</strong> 27</p>
          <p><strong>Phone:</strong> 01635848685</p>
          <p><strong>Whatsapp:</strong>01741898755</p>
          <p><strong>Email:</strong>reduanulislam92665@gmail.com</p>
          <p><strong>Address:</strong> Dhaka, Bangladesh</p>
          <p><strong>Nationality:</strong> Bangladeshi</p>
          <p><strong>Language:</strong> Bangla ,English, Hindi(speaking & Listing only)</p>
          <h3 className="text-2xl font-bold mt-6 mb-4">Education</h3>
          <p>Study Bachelor's Degree in Computer Science at Sonargaon University Since 2023</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
