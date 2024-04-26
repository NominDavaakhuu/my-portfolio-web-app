import { useState, useEffect } from "react";
// Fetching pictures from Fexel API
const PexelsPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          setIsLoading(true);
          const response = await fetch('https://api.pexels.com/v1/search?query=mongolia&orientation=landscape&per_page=6&page=1',
          {headers: {Authorization: `${process.env.REACT_APP_API_PIC}`,},});
          const json= await response.json();
          setPhotos(json.photos);
        } catch (error) {
          setError(error);
        } finally{
          setIsLoading(false);
        }
      };
      fetchPhotos();
  }, []);

  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {!isLoading && !error && (
      <div>
        <h1 className="md:text-4xl lg:text-5xl font-extrabold tracking-tight mx-10 my-20">I COME FROM THE COUNTRY OF ETERNAL BLUE SKY</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-10 mb-24">
          {photos.map((photo) => (
            <div key={photo.id}>
              <img className="h-48 w-72 max-w-full rounded-lg" src={photo.src.medium} alt={photo.photographer} />
            </div>
          ))}
        </div>
      </div>
    )}
  </>
  );
};

export default PexelsPhotos;






  