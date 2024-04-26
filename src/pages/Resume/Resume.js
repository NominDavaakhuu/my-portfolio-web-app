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
    <div className="w-full bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-900">
      <div className="grid grid-cols-3 gap-4 m-10 grid-flow-row-dense">
        <div> 
          <img className="w-24 h-24 rounded-full" src={Profile} alt="profile"/>
          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NOMIN-ERDENE DAV</p>
          <p className="text-gray-700 dark:text-gray-400">SOFTWARE DEVELOPER</p>
         </div>
        <div className="col-span-2">
           <p className="text-justify text-gray-700 dark:text-gray-400">Transitioning to IT industry, I, Nomin-Erdene Davaakhuu, bring a solid foundation in finance and a growing passion for technology. With hands-on experience in accounting roles at Nomin Holding LLC and Steppelink Holding LLC, I've developed keen attention to detail and expertise in financial management. Currently pursuing my Master of Information Technology at Queensland University of Technology, and armed with certifications in programming and cybersecurity, I am poised to excel in the dynamic realm of software development.</p>
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