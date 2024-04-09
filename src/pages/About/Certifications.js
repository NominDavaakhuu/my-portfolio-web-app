import { certificationData } from "../../data/experience";

const Certifications = () => {
  return (
    <section className="text-center border-b">
      <h2 className="mb-8 text-lg text-center font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 uppercase pt-6">Certifications</h2>
      {certificationData.map((info, index) => (
        <section key={index}>
          <h3 className="text-sky-400/100 font-semibold ">{info.name}</h3>
          <p>{info.source}</p>
          <p>{info.date}</p>
        </section>
      ))}
    </section>
  );
};

export default Certifications;