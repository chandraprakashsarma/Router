import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (

    <>
    <h1 className="mt-8 mb-6 text-4xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
    Default Accordion
    </h1>
    
    <div id="accordion-collapse" data-accordion="collapse">
      <AccordionItem
        title="What is Flowbite?"
        content="Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS."
        activeIndex={activeIndex}
        index={1}
        toggleAccordion={toggleAccordion}
      />
      <AccordionItem
        title="Is there a Figma file available?"
        content="Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file. Check out the Figma design system based on the utility classes from Tailwind CSS and components from Flowbite."
        activeIndex={activeIndex}
        index={2}
        toggleAccordion={toggleAccordion}
      />
      <AccordionItem
        title="What are the differences between Flowbite and Tailwind UI?"
        content="The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:"
        activeIndex={activeIndex}
        index={3}
        toggleAccordion={toggleAccordion}
      />
    </div>
    <h1 className="mt-8 mb-6 text-4xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
    Always Open
    </h1>
    </>
  );
};

const AccordionItem = ({ title, content, activeIndex, index, toggleAccordion }) => {
  const isActive = activeIndex === index;

  return (
    <div>
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          onClick={() => toggleAccordion(index)}
          aria-expanded={isActive}
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isActive ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`transition-all duration-300 ${isActive ? 'block' : 'hidden'}`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-10 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Accordion;
