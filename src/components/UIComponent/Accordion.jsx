import React, { useState } from 'react';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-white">
          <p className="text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

// Usage
function App() {
  const accordionItems = [
    { title: 'Accordion Item 1', content: 'Content of Accordion Item 1' },
    { title: 'Accordion Item 2', content: 'Content of Accordion Item 2' },
    { title: 'Accordion Item 3', content: 'Content of Accordion Item 3' },
  ];

  return (
    <div className="max-w-lg mx-auto py-8">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
