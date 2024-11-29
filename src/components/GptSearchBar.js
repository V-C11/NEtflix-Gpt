import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageContant";
import { useRef } from "react";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSeachBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchGptText = useRef(null);
  const dispatch = useDispatch();

  // seach movies in T,bd

  const seachMovieTMDB = async (movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchGptText.current.value);

    const gptQuery =
      "Act as Movie Recommendatioon system and suggest some movies for the query : " +
      searchGptText.current.value +
      ". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result : Gadar. Sholay, Jaadu, Koi Mil Gaya , Indra";

    // Make an AI call to GPT API and Get Movies Results
    const gptResult = await openai.client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult.choices?.[0]?.message?.content);
    const givenGptResult = gptResult.choices?.[0]?.message?.content.split(",");

    // for each movie i will search tmbd API
    const promiesArray = givenGptResult.map((movie) => seachMovieTMDB(movie));
    //  will get array of promies bcx it will take time to fetch
    const tmdbResults = await Promise.all(promiesArray);

    // dispatch an action to vstore movies

    dispatch(
      addGptMoviesResult({
        movieName: givenGptResult,
        movieResult: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[20%]  flex justify-center">
      <form
        className="w-full mx-auto  md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchGptText}
          type="text"
          className="col-span-8  m-3 p-3 ml-4 md:m-4 p-4 col-span-8"
          placeholder={lang[langKey].gptseachPlaceholder}
        />
        <button
          className="col-span-4 m-3 mr-4 md:py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSeachBar;
