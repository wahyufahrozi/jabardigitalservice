import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import Registrasi from "../Pages/Registrasi";

const { Footer, Sider, Content } = Layout;

export default class Sidebar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          theme="dark"
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" style={{ fontSize: "35px" }} />
                <span style={{ fontSize: "25px" }}>Beranda</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="?page=registrasi">
                <Icon type="form" style={{ fontSize: "35px" }} />
                <span style={{ fontSize: "25px" }}>Registrasi</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {this.props.page === "registrasi" ? (
            <Registrasi />
          ) : (
            <Content style={{ margin: "0 16px" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
          )}
          <Footer style={{ textAlign: "center" }}>
            Jabar Digital Services ©2020
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
