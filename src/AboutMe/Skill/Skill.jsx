import React from 'react';

const Skill = () => {
  const skills = [
    { category: 'Expertise', items: [
      { name: 'React Js', level: '94%' },
      { name: 'ES6', level: '93%' },
      { name: 'Express JS', level: '82%' },
      { name: 'MongoDB', level: '81%' },
      { name: 'Firebase', level: '96%' },
      { name: 'HTML', level: '87%' },
      { name: 'CSS', level: '86%' },
      { name: 'Tailwind CSS', level: '90%' }
    ]},
    { category: 'Comfortable', items: [
      { name: 'JavaScript', level: '71%' },
      { name: 'JWT (Json Web Token)', level: '68%' },
      { name: 'RestFul APIs', level: 'Familiar' },
      { name: 'Node Js', level: '27%' }
    ]},
    { category: 'Tools', items: [
      { name: 'Figma', level: '84%' },
      { name: 'Netlify', level: '70%' },
      { name: 'Chrome Dev Tools', level: '85%' },
      { name: 'Git', level: '91%' },
      { name: 'GitHub', level: '92%' },
      { name: 'Vercel', level: '72%' },
      { name: 'Firebase', level: '96%' },
      { name: 'VS Code', level: '76%' }
    ]}
  ];

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl font-bold mb-8 underline">My Skills</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 underline">{skillCategory.category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategory.items.map((skill, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-medium">{skill.name}</h4>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div className="bg-blue-600 h-4 rounded-full" style={{ width: skill.level }}></div>
                </div>
                <p className="text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
