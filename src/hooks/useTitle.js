import { useEffect } from "react";

//Page tittle gets updated
export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Nomin-Erdene`
  }, [title]);

  return null;
}