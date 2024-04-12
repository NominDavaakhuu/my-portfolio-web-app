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
      <div className="flex items-center shadow md:flex-row bg-sky-400/100">
       <img className="object-cover rounded-t-lg h-86 md:h-auto md:w-48 md:rounded-none " src={Profile} alt="profile"/>
       <div className="flex flex-col justify-between p-4 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NOMIN-ERDENE DAVAAKHUU</h5>
         <p className="mb-3 text-gray-700 dark:text-gray-400">SOFTWARE DEVELOPER</p>
         <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
         </svg>
         <img className="" src="" alt=""/>
         
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