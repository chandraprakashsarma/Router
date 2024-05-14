import React from 'react'

const tableData = [
    {
      productName: "Const",
      color: "Constant value",
      category: "*",
      price: "*"
    },
    {
      productName: "Let",
      color: "Prefer to use",
      category: "Block scope and functional scope",
      price: "*"
    },
    {
      productName: "Var",
      color: "Prefer not to use",
      category: "Issue in block scope and functional scope",
      price: "*"
    },
    {
        productName: "Undefined",
        color: "let Name",
        category: "Value not assisgn",
        price: "*"
      }
  ];
  
  const Variable = () => {
    return (
        
        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        Const, Let, Var
        </h1>


      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
              JavaScript Variables
              </th>
              <th scope="col" className="px-6 py-3">
               Use
              </th>
              <th scope="col" className="px-6 py-3">
               Use
              </th>
              <th scope="col" className="px-6 py-3">
               Use
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className={`bg-white border-b ${
                  index === tableData.length - 1 ? "dark:bg-gray-800" : "dark:bg-gray-800 dark:border-gray-700"
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.productName}
                </td>
                <td className="px-6 py-4">{item.color}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>





      </>
    );
  };
  
  export default Variable;
  