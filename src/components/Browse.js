import { useSelector } from "react-redux";
import useLatestMovies from "../Hooks/useLatestMovies";
import useNewUpcoming from "../Hooks/useNewUpcoming";
import useNowPlaying from "../Hooks/useNowPlaying";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRatedMovies";
import GptSearch from "./Gptsearch";
import Header from "./Header";
import MainContainer from "./MAinContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlaying(); // this is custom hooks
  usePopularMovies(); // this is custom hooks
  useTopRated();
  useNewUpcoming();
  useLatestMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <> 
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
