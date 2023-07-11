import { Dropdown, Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  CodeOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
  const [collapsed, setCollapsed] = useState(false);
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
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
      }}
    >
      <div className="desktop-menu">
        <Menu
          theme="none"
          mode="horizontal"
          onClick={handleMenuClick}
          items={items}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        />
      </div>
      <div className="mobile-menu">
        <Dropdown
          menu={{
            items: items.map((item) => ({
              ...item,
              onClick: handleMenuClick,
            })),
          }}
          trigger={["click"]}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
