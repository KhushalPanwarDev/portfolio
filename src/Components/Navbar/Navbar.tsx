import logo from "../../assets/Khushal_logo.png";
import { GithubFilled, LinkedinFilled, XOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="w-15 flex flex-shrink-0 items-center">
        <img className="max-w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="http://www.linkedin.com/in/khushal-panwar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled className="w-6 h-6 cursor-pointer" />
        </a>
        <GithubFilled className="cursor-pointer" />
        <XOutlined className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
