import React from "react";
import UseCallBackWithout from "./UseCallBackWithout";
import UseCallBackWith from "./UseCallBackWith";
import ListWithout from "./List/ListWithout/ListWithout";
import ListWith from "./List/ListWith/ListWith";

function UseCallBackApps() {
  return (
    <>
      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
        Use Callback Basic Concept
      </h1>

      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        useCallback and useMemo
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Without
          </h1>
          <UseCallBackWithout />
        </div>

        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            With
          </h1>
          <UseCallBackWith />
        </div>
      </div>

      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        List Item - useCallback and useMemo
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Without
          </h1>
          <ListWithout />
        </div>

        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            With
          </h1>

          <ListWith />
        </div>
      </div>
    </>
  );
}

export default UseCallBackApps;
