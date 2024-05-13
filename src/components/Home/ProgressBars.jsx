import React from 'react';

const ProgressBar = ({ title, percentage }) => {
  return (
    <>
    <div className="flex flex-col items-start space-y-2">
      <div className="text-sm font-medium text-black">{title}</div>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
    </div>
    </>
  );
};

const MultipleProgressBarsWithTitle = () => {
  // Define an array of progress bar data with title and percentage
  const progressBarsData = [
    { title: 'HTML5', percentage: 95 },
    { title: 'CSS3', percentage: 90 },
    { title: 'Javascript', percentage: 75 },
    { title: 'ReactJS', percentage: 80 },
  ];

  return (
    <>
    <h1 className="text-left mt-4 mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
    MY SKILLS
    </h1>
  
    
    <div className="space-y-6">
      {progressBarsData.map((bar, index) => (
        <ProgressBar key={index} title={bar.title} percentage={bar.percentage} />
      ))}
    </div>
    </>
  );
};

export default MultipleProgressBarsWithTitle;
