import PropTypes from "prop-types";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const { trailer } = useGetMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
VideoBackground.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default VideoBackground;
