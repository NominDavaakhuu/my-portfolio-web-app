import { useTitle } from "../../hooks/useTitle";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Certifications from "./Certifications";
import Tools from "./Tools";
import Profile from "../../assets/profile.jpg";

const ResumeStyle ="inline-block w-full p-4 rounded-ss-lg bg-gray-100 hover:bg-gray-200 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600";
const BoxStyle="p-10 bg-white md:p-8 dark:bg-gray-800";
const Resume = () => {
  useTitle("Resume")
  return (
    <div className="w-full bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 flex items-center shadow md:flex-row">
       <img className="w-24 h-24 m-6 rounded-full shadow-lg " src={Profile} alt="profile"/>
       <div className="flex flex-col justify-between p-4 m-3 leading-normal">
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NOMIN-ERDENE DAVAAKHUU</h5>
         <p className="mb-3 text-gray-700 dark:text-gray-400">SOFTWARE DEVELOPER</p>
         <p className="text-sky-600 font-thin dark:text-sky-400">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z" clipRule="evenodd"/>
              </svg>
             nerdene48@gmail.com <br/>
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 6.93V21a1 1 0 1 1-2 0v-5.07A7.001 7.001 0 0 1 5 9Zm5.94-1.06A1.5 1.5 0 0 1 12 7.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.398.158-.78.44-1.06Z" clipRule="evenodd"/>
            </svg>
            Brisbane, Australia</p>
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
  );
};
export default Resume;