import { experienceData } from "../../data/experience";

const WorkExperience = () => {
  return (
    <section>
      {experienceData.map((info, index) => (
        <section key={index}>
          <h3 className="text-sky-500 font-semibold uppercase">{info.jobtitle}</h3>
          <section className="font-normal text-gray-600">
            <p>{info.companyname} - {info.worktype}</p>
          </section>
          <p>{info.duration}</p>
          <p className="mb-3 font-thin">{info.location}</p>
          <section>
            {info.responsibility.map((data, index) => (
                <p className="mb-2" key={index}>
                  <span>* {data}</span>
                </p>
            ))}
          </section>
        </section>
      ))}
    </section>
  );
};
export default WorkExperience;