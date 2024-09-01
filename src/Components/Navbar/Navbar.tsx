import logo from "../../assets/Khushal_logo.png";
import { GithubFilled, LinkedinFilled, XOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="w-15 flex flex-shrink-0 items-center">
        <img className="max-w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <LinkedinFilled />
        <GithubFilled />
        <XOutlined />
      </div>
    </nav>
  );
};

export default Navbar;
