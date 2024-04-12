import { certificationData } from "../../data/experience";

const Certifications = () => {
  return (
    <section>
      {certificationData.map((info, index) => (
        <section key={index}>
          <h3 className="text-sky-400/100 font-semibold ">{info.name}</h3>
          <p>{info.source}</p>
          <p className="font-thin">{info.date}</p>
        </section>
      ))}
    </section>
  );
};

export default Certifications;