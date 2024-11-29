import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNewUpcoming} from "../utils/moviesSlice";
import { useEffect } from "react";


const useNewUpcoming = () => {
        //Fetch Data From TMDB Api and Update Store

  const dispatch = useDispatch();

  const newUpcoming = useSelector(
    (store) => store.movies.newUpcoming
  );

  const getNewUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNewUpcoming(json.results));
  };
  useEffect(() => {
    !newUpcoming && getNewUpcoming();
  }, []);
}

export default useNewUpcoming;