/* eslint-disable react/prop-types */
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const { trailer } = useGetMovieTrailer(movieId);

  return (
    <div className="pointer-events-none">
      <iframe
        className="w-screen aspect-video pointer-events-none"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
