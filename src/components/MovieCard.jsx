import PropTypes from "prop-types";
import { TMDB_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={TMDB_IMAGE_CDN + posterPath} alt="Movie Card" />
    </div>
  );
};

MovieCard.propTypes = {
  posterPath: PropTypes.string.isRequired,
};

export default MovieCard;
