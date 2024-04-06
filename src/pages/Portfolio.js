import { useTitle } from "../hooks/useTitle";
export const Portfolio = () => {
  useTitle("Portfolio");
  return (
    <div>A page that displays your creations .

    For top-marks, this page must be populated from an external API.
    
    If you are unable to demonstrate this page calling an external API, and perhaps, instead rendering data from an array of Javascript objects, your marks will significantly decrease.
    
    Search, with a form that allows users to search for items based on certain criteria (e.g., selected from a drop-down list, entered into a text box, or by automatically determining the user’s location using HTML5 Geolocation API)
    
    When clicked/tapped, each item must open to a page for itself</div>
  )
}