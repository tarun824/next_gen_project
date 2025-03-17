import React from "react";

const BtnSecondary = (props) => {
  return (
    <button
      {...props}
      className="text-indigo-600 bg-white border border-orange-500 text-sm px-4 py-2 rounded-md hover:bg-orange-500 hover:text-indigo-50 transition-colors focus:outline-none focus:ring focus:border-orange-300 focus:ring-offset-1"
    >
      {props.children}
    </button>
  );
};

export default BtnSecondary;
