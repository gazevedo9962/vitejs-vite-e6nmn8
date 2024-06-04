import { Button, ConfigProvider, Space, theme } from "antd";
import React from "react";

const TesteTheme: React.FC = () => {
  const themeDefault = {
      // Seed Token
      colorPrimary: "#00b96b",
      borderRadius: 10,

      // Alias Token
      colorBgContainer: "#f6ffed",
    },
    themeAlternate = {
      // Seed Token
      colorPrimary: "#000",
      borderRadius: 2,

      // Alias Token
      colorBgContainer: "#00b96b",
    };

  const [SwitchTheme, setSwitchTheme] = React.useState(true);

  //   const [Theme, setTheme] = React.useState(
  //     SwitchTheme ? themeDefault : themeAlternate,
  //   );

  return (
    <ConfigProvider
      theme={{
        token: SwitchTheme ? themeDefault : themeAlternate,
        // algorithm: theme.darkAlgorithm,
      }}
    >
      <Space>
        <Button type="primary" onClick={() => setSwitchTheme(!SwitchTheme)}>
          Primary
        </Button>
        <Button>Default</Button>
      </Space>
    </ConfigProvider>
  );
};

export default TesteTheme;
