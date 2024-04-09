import { useTitle } from "../hooks/useTitle";
import Education from "./About/Education";
import WorkExperience from "./About/WorkExperience";
import Certifications from "./About/Certifications";
import Tools from "./About/Tools";
export const Resume = () => {
  useTitle("Resume")
  return (
    <>
    <div className="">
     <Tools/>
     <Education/>
     <WorkExperience/>
     <Certifications/>
    </div>
    </>
  )
}