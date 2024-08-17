const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black/100 to-black/90 py-10 text-white">
      <div className="container mx-auto flex flex-col items-start  space-y-4 px-4">
        <p>Questions? Call 000-800-919-1694</p>
        <ul className="flex flex-wrap justify-center space-x-6">
          <li className="hover:underline cursor-pointer">FAQ</li>
          <li className="hover:underline cursor-pointer">Help Centre</li>
          <li className="hover:underline cursor-pointer">Terms of Use</li>
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Cookie Preferences</li>
          <li className="hover:underline cursor-pointer">
            Corporate Information
          </li>
        </ul>
        <button className="border border-gray-500 py-2 px-4 mt-4">
          <span className="mr-2">🌐</span> English
        </button>
      </div>
    </footer>
  );
};

export default Footer;
