import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: "Home",
    key: "home",
    target: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "About",
    key: "about",
    target: "/about",
    icon: <UserOutlined />,
  },
  {
    label: "Projects",
    key: "projects",
    target: "/projects",
    icon: <CodeOutlined />,
  },
  {
    label: "Resume",
    key: "resume",
    target: "/resume",
    icon: <FileTextOutlined />,
  },
];

const { Header } = Layout;

const Navbar = () => {
  const [navColour, updateNavbar] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };

  const scrollHandler = () => {
    window.scrollY >= 20 ? updateNavbar(true) : updateNavbar(false);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Header
      className={navColour ? "sticky" : "navbar"}
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <Menu
        // theme="dark"
        mode="horizontal"
        style={{ display: "flex", justifyContent: "flex-end" }}
        onClick={handleMenuClick}
        items={items}
      />
    </Header>
  );
};

export default Navbar;
