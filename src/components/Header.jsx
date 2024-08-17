import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex justify-around items-center bg-opacity-65 bg-black h-24">
      <img
        className="p-2 m-2 w-52 h-full  "
        src={NETFLIX_LOGO_URL}
        alt="logo"
      />
      <div className="w-12"></div>
    </div>
  );
};

export default Header;
