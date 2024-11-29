import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  
    // fetch trailer video && updating the store with trailer video data
  
    const dispatch = useDispatch();

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );


  const getMoviesTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        //   533535
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailor = filterData.length ? filterData[1] : json.results[0];
    console.log(trailor);
    dispatch(addTrailerVideo(trailor));
  };

  useEffect(() => {
    !trailerVideo && getMoviesTrailer();
  }, []);
};

export default useMovieTrailer;
