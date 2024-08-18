import PropTypes from "prop-types";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="space-x-4">
        <button className="bg-white text-black px-12 text-xl  py-4  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white px-12 text-xl  py-4 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default VideoTitle;
