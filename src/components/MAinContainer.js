import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackGround";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    // if(movies == null) return; // you can write this aldo and thisi is known as early return
    if(!movies) return;

    const mainMovies = movies[0];
    // console.log(mainMovies)
  
    const {original_title, overview, id} = mainMovies
  
  
  
  
  return <div>
        <VideoTitle  title = {original_title} overview = {overview}/>
        <VideoBackground movieId = {id}/>
  </div>;
};

export default MainContainer;
