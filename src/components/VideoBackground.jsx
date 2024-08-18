import PropTypes from "prop-types";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const { trailer } = useGetMovieTrailer(movieId);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer?.key}`}
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
