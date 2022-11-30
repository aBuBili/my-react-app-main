import { useState } from "react";
import styled from "@emotion/styled";

import { Link, Outlet } from "react-router-dom";
import { Row, Col, Space, Avatar, Image } from "antd";

function Menu() {
  const list = [
    { name: "Tabbar", url: "/images/cover/tabbar.jpg", href: "/" },
    { name: "Background", url: "/images/cover/background.jpg", href: "/background" },
    { name: "MouseRotate", url: "/images/cover/mouse-rotate.jpg", href: "/mouse-rotate" },
    { name: "TurnMe", url: "/images/cover/turn-me.jpg", href: "/turn-me" },
    { name: "ScrollX", url: "/images/cover/scroll-x.jpg", href: "/scroll-x" },
    { name: "ImageRotate", url: "/images/cover/image-rotate.jpg", href: "/image-rotate" },
    { name: "AnimateIcon", url: "/images/cover/animate-icon.jpg", href: "/animate-icon" },
    { name: "DayReocrd", url: "/images/cover/day-record.jpg", href: "/day-record", target: "_blank" },
  ];

  return (
    <MenuStyled>
      <Space direction="horizontal">
        <Avatar size={50} src="../../src/assets/avatar.png" />
        <span className="nickname">阿不不不_</span>
      </Space>
      <br></br>
      <Space direction="vertical" className="projectList">
        {list.map((e, index) => {
          return (
            <Link to={e.href} key={index} target={e.target}>
              <div className="projectCover" style={{ backgroundImage: `url("${e.url}")` }}></div>
            </Link>
          );
        })}
      </Space>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  width: 100%;
  padding: 24px 12px 24px 32px;
  background-color: #fff;
  box-shadow: 0 0 10px #d1d9e6;

  .nickname {
    font-size: 20px;
    font-family: "Alimama_ShuHeiTi_Bold";
  }

  .projectList {
    height: calc(100vh - 48px - 50px - 40px);
    margin-top: 40px;
    overflow-x: none;
    overflow-y: auto;

    .projectCover {
      /* background-image: url("../../src/assets/avatar.png"); */
      background-size: contain;
      background-position: center;
      width: 180px;
      height: 140px;
      border-radius: 12px;
      margin-bottom: 12px;
      margin-right: 12px;
      cursor: pointer;
      border: 4px solid #efefef;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default Menu;
