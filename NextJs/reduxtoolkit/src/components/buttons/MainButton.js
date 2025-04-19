import React from "react";

const MainButton = ({ title, onClick = () => {} }) => {
  return (
    <button className="bg-green-400 p-4 m-5" onClick={onClick}>
      {title}
    </button>
  );
};

export default MainButton;
