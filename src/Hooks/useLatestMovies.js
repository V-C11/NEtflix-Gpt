import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addLatestMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useLatestMovies = () => {
        //Fetch Data From TMDB Api and Update Store

  const dispatch = useDispatch();

  const getLatestMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/latest?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addLatestMovies(json.results));
  };
  useEffect(() => {
    getLatestMovies();
  }, []);
}

export default useLatestMovies