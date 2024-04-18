import React from "react";
import { toolsData } from "../../data/experience"
const ToolsAbout = () => {
  return (
    <React.Fragment>
      <h3 className="title-font dark:text-white text-gray-900 font-semibold text-center mb-6">Here are a few tools & technologies I’ve been working with:</h3>
      <div className="columns-2 p-8 m-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      {toolsData.map((tool)=>( 
        <li key={tool} >{tool}</li>
      ))}
      </div>
    </React.Fragment>
  );
};
export default ToolsAbout;