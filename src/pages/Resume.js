import { useTitle } from "../hooks/useTitle";
import Education from "./About/Education";
import WorkExperience from "./About/WorkExperience";
import Certifications from "./About/Certifications";
import Tools from "./About/Tools";
import Profile from "../assets/profile.jpg";

const ResumeStyle ="inline-block w-full p-4 rounded-ss-lg bg-gray-100 hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600";
const BoxStyle="p-4 bg-white md:p-8 dark:bg-gray-800";
export const Resume = () => {
  useTitle("Resume")
  return (
    <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 flex items-center shadow md:flex-row">
       <img className="w-24 h-24 mb-3 rounded-full shadow-lg " src={Profile} alt="profile"/>
       <div className="flex flex-col justify-between p-4 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NOMIN-ERDENE DAVAAKHUU</h5>
         <p className="mb-3 text-gray-700 dark:text-gray-400">SOFTWARE DEVELOPER</p>
         <p className="mb-3 text-sky-600 font-thin dark:text-sky-400">nerdene48@gmail.com <br/> Brisbane, Australia</p>
       </div>
      </div>
        <ul className="text-sm font-medium  text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" >
          <li className="w-full">
            <h1 className={ResumeStyle}>WORK HISTORY</h1>
            <div className={BoxStyle} ><WorkExperience/></div>
          </li>
          <li className="w-full">
            <h1 className={ResumeStyle}>EDUCATION</h1>
            <div className={BoxStyle} ><Education/></div>  
            <h1 className={ResumeStyle}>CERTIFICATIONS</h1>
            <div className={BoxStyle} ><Certifications/></div>
          </li>
          <li className="w-full">
            <h1 className={ResumeStyle}>SKILLS</h1>
            <div className={BoxStyle} ><Tools/></div>  
            
          </li>
        </ul>
    </div>
  )
}