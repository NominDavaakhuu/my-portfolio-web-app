import { Link } from "react-router-dom";
import {Button} from "./Button";
export const Card = ({project}) => {
const {title,description,thumbnails,resourceId}=project;
const image = thumbnails.maxres.url;
const videoId = resourceId.videoId;
const link = (`https://www.youtube.com/watch?v=${videoId}`);

const handleLink = () => {
  if (link) {
    window.open(link, "_blank");
  }
};
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to= {`/project/${title}`} target="_blank" rel="noopener noreferrer">
            <img className="rounded-t-lg" src={image} alt="thumbnail"/>
        </Link>
        <div className="p-5">
            <Link to= {`/project/${title}`} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <Button onClick={handleLink}>Open in Youtube</Button>
        </div>
    </div>
  )
}