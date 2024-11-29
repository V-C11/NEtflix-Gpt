const VideoTitle = ({ title, overview, onPlayClick }) => {
  return (
    <div className="px-6 md:pt-64 px-14 w-screen aspect-video absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:font-bold md:text-6xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="flex mt-[35%] md:my-2 md:m-0">
        <button onClick={onPlayClick} className="flex items-center bg-white text-black p-2 px-1.5  py-2 text-sm md: flex items-center py-2 p-4 px-10 text-xl rounded-lg hover:bg-opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 mx-1 md:size-6 mx-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="hidden md:flex items-center mx-4 bg-gray-100 text-white p-4 px-8 text-lg rounded-lg bg-opacity-25 hover:bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 mx-2"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
