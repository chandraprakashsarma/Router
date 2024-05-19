import React, { useState } from 'react';

const NestedListApp = () => {
  const [lists, setLists] = useState([['Initial item']]);

  const addItemToList = (listIndex, newItem) => {
    setLists(prevLists => {
      const newLists = [...prevLists];
      newLists[listIndex] = [...newLists[listIndex], newItem];
      return newLists;
    });
  };

  return (
    <div className="p-4">
      {lists.map((list, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl mb-2">List {index + 1}</h3>
          <ul className="list-disc ml-5">
            {list.map((item, i) => (
              <li key={i} className="mb-1">{item}</li>
            ))}
          </ul>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => addItemToList(index, `New item ${list.length + 1}`)}
          >
            Add Item
          </button>
        </div>
      ))}
    </div>
  );
};

export default NestedListApp;
