import { useState } from "react";
import VideoBackground from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const VideoBackTitle = ({ movieId, title, overview }) => {
  const [reloadTrailer, setReloadTrailer] = useState(false);

  const handlePlayClick = () => {
    // Toggle the reload state to force the trailer to reload
    setReloadTrailer((prev) => !prev);
  };

  return (
    <div>
      {/* Trailer Background */}
      <VideoBackground movieId={movieId} reloadTrailer={reloadTrailer} />

      {/* Video Title with Play Button */}
      <VideoTitle title={title} overview={overview} onPlayClick={handlePlayClick} />
    </div>
  );
};

export default VideoBackTitle;
