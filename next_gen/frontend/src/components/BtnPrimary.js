import React from "react";

const BtnPrimary = (props) => {
  return (
    <button
      {...props}
      className="text-indigo-50 bg-orange-500 text-sm px-4 py-2 border border-orange-500 rounded-md hover:bg-orange-600/90 transition-colors focus:outline-none focus:ring focus:border-orange-300 focus:ring-offset-1"
    >
      {props.children}
    </button>
  );
};

export default BtnPrimary;
