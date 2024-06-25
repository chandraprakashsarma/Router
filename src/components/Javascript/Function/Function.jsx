import React from "react";
import { Link } from "react-router-dom";

const users = [
  {
    name: "Basic Function",
    route: "/function",
  },
  {
    name: "Arrow Functions",
    route: "/function",
  },
  {
    name: "Function Components",
    route: "/function",
  },
  {
    name: "Higher-Order Functions",
    route: "/higher_order_functions",
  },
  {
    name: "Callback Functions",
    route: "/function",
  },
  {
    name: "Anonymous Functions",
    route: "/function",
  },
  {
    name: "Function Hoisting",
    route: "/function",
  },
  {
    name: "Function Composition",
    route: "/function",
  },
  {
    name: "Closures",
    route: "/function",
  },
  {
    name: "Currying",
    route: "/function",
  },
  {
    name: "Memoization",
    route: "/function",
  },
];

export default function Function() {
  return (
    <>
      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        Function Basic Concept
      </h1>

      <div className="grid grid-cols-4 gap-4 ">
        {users.map((user, index) => (
          <Link
            to={user.route}
            key={index}
            className=" p-2 rounded-md border border-gray-500 hover:bg-gray-200"
          >
            {/*<img src={user.src} alt={user.alt} className="h-auto max-w-full rounded-lg" />*/}
            <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
              {user.name}
            </h1>
            {/*<h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.position}</h1>*/}
          </Link>
        ))}
      </div>
    </>
  );
}
