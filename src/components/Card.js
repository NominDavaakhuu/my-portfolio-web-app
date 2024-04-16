import { Link } from "react-router-dom";

export const Card = ({project}) => {
const {title,description,thumbnails}=project;
//thumbnail will be fixed
const image = `https://i.ytimg.com/vi/${thumbnails}/maxresdefault.jpg`;


  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to="#" >
            <img className="rounded-t-lg" src={image} alt="thumbnail"/>
        </Link>
        <div className="p-5">
            <Link to="#" >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
    </div>
  )
}