import React from "react";

const TodoListSkeleton = () => {
  return (
    <ul className="space-y-4 animate-pulse w-screen">
      {Array.from({ length: 10 }, (_, index) => (
        <li
          key={index}
          className="flex items-center p-4 rounded-lg shadow-md bg-gray-300 mx-4"
        >
          <div className="w-10 h-10 rounded-full mr-4 bg-gray-200"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
          <div className="px-4 py-1 rounded-full text-sm font-semibold bg-gray-200 w-24"></div>
        </li>
      ))}
    </ul>
  );
};

export default TodoListSkeleton;
