import { Switch } from "antd";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <Switch
        checkedChildren="dark"
        unCheckedChildren="light"
        defaultChecked
        onClick={theme.toggleTheme}
        style={{margin: '20px auto'}}
      />
      <div style={{ width: "100px", margin: '0 auto' }}>
        <div style={theme.theme}>
          <div style={{ padding: "20px" }}>Provider</div>
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;
