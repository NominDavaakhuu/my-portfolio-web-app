import { useTitle } from "../hooks/useTitle";
export const About = () => {
  useTitle("About")
  return (
    <>
    <div>A page that describes who you are
    </div>
    <div>WHO AM I?</div>
    </>
  );
}