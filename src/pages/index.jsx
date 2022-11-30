import { useState } from "react";
import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";
import Menu from "../comp/menu";

function Index() {
  return (
    <Row>
      <Col>
        <Menu></Menu>
      </Col>
      <Col style={{ flex: 1 }}>
        <Outlet />
      </Col>
    </Row>
  );
}

export default Index;
