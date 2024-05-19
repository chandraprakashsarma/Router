import React, { useState } from 'react';

const AccordionApp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const sections = [
    { title: 'Section 1', content: 'Content of Section 1' },
    { title: 'Section 2', content: 'Content of Section 2' },
    { title: 'Section 3', content: 'Content of Section 3' },
  ];

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Accordion Component 
   </h1>
    <div className="p-4 space-y-2">
      {sections.map((section, index) => (
        <div key={index} className="border rounded">
          <button
            className="w-full text-left p-2 bg-gray-200 rounded-t"
            onClick={() => toggleIndex(index)}
          >
            {section.title}
          </button>
          {activeIndex === index && (
            <div className="p-2 bg-white">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default AccordionApp;
