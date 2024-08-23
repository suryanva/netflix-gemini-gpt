import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BACKGROUND_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div
      className="w-full min-h-screen   text-white  "
      style={{
        backgroundImage: `url(${NETFLIX_BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
