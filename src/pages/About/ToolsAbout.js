import React from "react";
import { toolsData } from "../../data/experience"
const ToolsAbout = () => {
  return (
    <>
      <h3 className="title-font dark:text-white text-gray-900 font-semibold text-center m-10">Here are a few tools & technologies I’ve been working with:</h3>
      <div className="columns-2 p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-10 ">
      {toolsData.map((tool)=>( 
        <li key={tool} >{tool}</li>
      ))}
      </div>
    </>
  );
};
export default ToolsAbout;