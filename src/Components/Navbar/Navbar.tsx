import "./Navbar.scss";
import logo from "../../assets/Khushal_logo.png";
import { GithubFilled, LinkedinFilled, XOutlined } from "@ant-design/icons";

const Navbar = () => {
  const baseClass = "navbar-container";
  return (
    <div className={baseClass}>
      <div className={`${baseClass}__logo-container`}>
        <span className={`${baseClass}__logo-container__logo`}>
          <img src={logo} alt="logo"/>
        </span>
        <span className={`${baseClass}__logo-container__social-app-icons`}>
        <LinkedinFilled/>
        <GithubFilled/>
        <XOutlined />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
