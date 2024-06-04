import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, ConfigProvider } from "antd";
import TesteAnimated from "../spring/TesteAnimated";
import TesteAnimated2 from "../spring/TesteAnimated2";
import CardAnimated from "../react-spring/demo/src/sandboxes/card/src/App";
import FlipCard from "../react-spring/demo/src/sandboxes/flip-card/src/App";
import TesteReactMotion from "../react-motion/Teste";
import ImageGalery from "../motion/dev/examples/AnimatePresence-image-gallery.tsx";
import TesteSuite from "../suite/teste.tsx";
import TesteCardChakra from "../chakra/Teste.tsx";
import CardTemplate from "../grommet/teste.tsx";
import BasicCard from "../mui/teste.tsx";
import TesteTheme from "./TesteTheme.tsx";
const { Header, Sider, Content } = Layout;

const LayoutNavSwitch: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "nav 1",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
              minWidth: "70vw",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <TesteTheme />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default LayoutNavSwitch;
