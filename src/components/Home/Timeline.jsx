import React from 'react';



const Timeline = ({ items,Education }) => {
  return (
    <>
    <h1 className="text-left mt-4 mb-4 font-bold tracking-tight text-black lg:text-5xl">
    RESUME
    </h1>
    <h1 className="text-left mt-4 mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
    Working Experience
    </h1>

    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {items.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          {/*<time className="text-left mb-1 text-sm font-normal leading-none text-black">{item.date}</time>*/}
          <h3 className="text-left text-lg font-semibold text-black">{item.date}</h3>
          <h3 className="text-left text-lg font-semibold text-black">{item.title}</h3>
          <p className="text-left mb-4 text-base font-normal text-black">{item.description}</p>
        </li>
      ))}
    </ol>

    <h1 className="text-left mt-4 mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
    Educational Qualifications
    </h1>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {Education.map((Education, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          {/*<time className="text-left mb-1 text-sm font-normal leading-none text-black">{item.date}</time>*/}
          <h3 className="text-left text-lg font-semibold text-black">{Education.date}</h3>
          <h3 className="text-left text-lg font-semibold text-black">{Education.title}</h3>
          <p className="text-left mb-4 text-base font-normal text-black">{Education.description}</p>
        </li>
      ))}
    </ol>
    </>
  );
};

export default Timeline;
