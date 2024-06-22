import React from "react";
import ToDoCallback from "./To-Do-List/ToDoCallback";

function UseCallBackApps() {
  return (
    <>
      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
        Use Callback Basic Concept
      </h1>

      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Render Child
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <ToDoCallback />
        </div>
      </div>
    </>
  );
}

export default UseCallBackApps;
