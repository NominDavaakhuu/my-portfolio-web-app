import { educationData } from "../../data/experience";

const Education = () => {
  return (
    <section className="text-center border-b">
      <h2 className="mb-8 text-lg text-center font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 uppercase pt-6">Education</h2>
      {educationData.map((info, index) => (
        <section key={index}>
          <h3 className="text-sky-400/100 font-semibold">{info.name}</h3>
          <p>{info.status}</p>
          <p>{info.year}</p>
        </section>
      ))}
    </section>
  );
};

export default Education;
