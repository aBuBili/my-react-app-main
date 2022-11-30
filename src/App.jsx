import { useState } from "react";
import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import Menu from "./comp/menu";

function App() {
  return (
    <div id="App">
      <Outlet />
    </div>
  );
}

export default App;
