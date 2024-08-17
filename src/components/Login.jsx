import Form from "./Form";
import { NETFLIX_BACKGROUND_URL } from "../utils/constants";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <div
      className="w-full min-h-screen  flex-col text-white "
      style={{
        backgroundImage: `url(${NETFLIX_BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default Login;
