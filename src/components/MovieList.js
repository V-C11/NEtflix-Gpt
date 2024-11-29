import { useEffect } from "react";
import MovieCard from "./MovieCard";
import "@splidejs/splide/dist/css/splide.min.css"; // Import Splide styles
import Splide from "@splidejs/splide";

const MovieList = ({ title, movies }) => {
  useEffect(() => {
    const splideElements = document.querySelectorAll('.shared-splide');
    splideElements.forEach((element) => {
      new Splide(element, {
        type: "loop",
        height: "auto", // Adjust height based on content
        perPage: 7, // Number of items per page for large screens
        gap: "1rem", // Space between items
        pagination: false, // Disable dots
        arrows: true, // Enable arrows for navigation
        breakpoints: {
          1200: {
            perPage: 4, // Adjust for medium screens
          },
          900: {
            perPage: 3, // Adjust for smaller screens
          },
          600: {
            perPage: 3,
            // Adjust for very small screens
          },
        },
      }).mount();
    });
  }, []);

  return (
    <section className="shared-splide splide" aria-label="Movie Carousel">
      <div className="splide__track">
        <p className="text-white text-lg md:text-3xl mt-2 mb-6">{title}</p>
        <ul className="splide__list">
          {movies?.map((movie) => (
            <li className="splide__slide" key={movie.id}>
              <div className="splide__slide__container">
                <MovieCard posterPath={movie.poster_path} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MovieList;



// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   console.log(movies);
//   return (
//     <div>
//       <div className="px-6 pt-4 ">
//         <h1 className="text-3xl py-4 text-white">{title}</h1>
//         <div className="flex overflow-x-scroll no-scrollbar">
//           <div className="flex">
//             {movies?.map((movie) => (
//               <MovieCard key={movie.id} posterPath={movie.poster_path} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;
