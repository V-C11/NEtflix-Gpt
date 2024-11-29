import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt); // subscribe to  store (get data to from store)

  const { movieName, movieResult } = gpt;
  //you can right this way too
  //   const {movieName , movieResult} = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieName.map((movieName , index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
