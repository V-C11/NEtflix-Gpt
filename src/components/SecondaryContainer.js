import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies)

  return (
    <div className="bg-black">
      <div className="mt-0 pl-4 md:-mt-52 md:pl-10 relative z-20">
        <MovieList className="shared-splide" title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList className="shared-splide" title={"Upcoming Movies"} movies={movies.newUpcoming} />
        <MovieList className="shared-splide" title={"Latest Movies"} movies={movies.latestMovies} />
        <MovieList className="shared-splide" title={"Top Rated"} movies={movies.topRated} />
        <MovieList className="shared-splide"  title={"Popular Movies"} movies={movies.popularMovies} />

      </div>
    </div>
  );
};

export default SecondaryContainer;
