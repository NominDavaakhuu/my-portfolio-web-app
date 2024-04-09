import { experienceData } from "../../data/experience";

const WorkExperience = () => {
  return (
    <section className="text-center border-b">
      <h2 className="mb-8 text-lg text-center font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 uppercase pt-6">Work Experience</h2>
      {experienceData.map((info, index) => (
        <section key={index}>
          <h3 className="text-sky-400/100 font-semibold">{info.jobtitle}</h3>
          <section className="font-normal text-gray-600">
            <p>{info.companyname} - {info.worktype}</p>
          </section>
          <p>{info.duration}</p>
          <p>{info.location}</p>
          <ol className="">
            {info.responsibility.map((data, index) => (
              <li key={index}>*{data}</li>
            ))}
          </ol>
        </section>
      ))}
    </section>
  );
};
export default WorkExperience;