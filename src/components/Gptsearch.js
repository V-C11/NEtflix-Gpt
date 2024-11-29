import { BACKGROUND_IMG } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSeachBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-[100%] h-[100%] sm: h-screen object-cover" src={BACKGROUND_IMG} alt="logo1" />
      </div>
      <div className="">
        <GptSeachBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};
export default GptSearch;
