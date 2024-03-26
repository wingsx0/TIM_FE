"use client";
import React from "react";
import { Breadcrumb, Layout, theme } from "antd";
import MenuLeftDashboard from "@/components/menu/MenuLeftDashboard";
const { Header, Content, Sider } = Layout;

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout className="dashboard-layout">
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
            style={{ flex: 1, minWidth: 0 }}
          /> */}
        </Header>
        <Layout>
          <Sider width={200} style={{ background: colorBgContainer }}>
            <MenuLeftDashboard />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutDashboard;
