import React from "react";
import "./Navbar.scss";
import { Avatar, Button, Layout } from "antd";
import { TeamOutlined } from "@ant-design/icons";
const { Header } = Layout;

const Navbar = ({ fetchData, data }) => {
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: "rgb(248,248,248)",
        }}
      >
        <div className="header-content">
          <div className="logo">
            <h1>Welcome to Info System</h1>
          </div>
          <div className="header-func">
            <Button onClick={fetchData}>
              <TeamOutlined />
              Change user
            </Button>
            <Avatar size={40} src={data?.picture?.large} />
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
