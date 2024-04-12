import { educationData } from "../../data/experience";

const Education = () => {
  return (
    <section>

      {educationData.map((info, index) => (
        <section key={index}>
          <h3 className="text-sky-400/100 font-semibold">{info.name}</h3>
          <p>{info.status}</p>
          <p className="font-thin">{info.year}</p>
        </section>
      ))}
    </section>
  );
};

export default Education;
