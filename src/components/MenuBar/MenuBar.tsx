import React, { useEffect, useState } from "react";
import { Layout, Menu, Input } from "antd";
import "./MenuBar.scss";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

const { Header } = Layout;

export default function MenuBar() {
  const history = useHistory();
  const location = useLocation();

  const [selectedKey, setSelectedKey] = useState("homepage")

  useEffect(() => {
    let currentSelectedKey = "homepage";

    if (location.pathname.includes("/article")) {
      currentSelectedKey = "articles";
    }

    if (location.pathname.includes("/studyMaterial")) {
      currentSelectedKey = "studyMaterials"
    }

    if (location.pathname.includes("/search")) {
      currentSelectedKey = "menuBarSearch"
    }

    setSelectedKey(currentSelectedKey)
  }, [location])

  const onSearch = (words: string) => {
    console.log(words);
    history.replace(`/search/${words}`)
  }

  return (
    <Header
      className="menuBar"
    >
      <Menu
        theme="light"
        mode="horizontal"
        selectedKeys={[selectedKey]}>
        <Menu.Item
          key="homepage">
          <Link to="/">Beton@mu</Link>
        </Menu.Item>
        <Menu.Item
          key="articles">
          <Link to="/article">Articles</Link>
        </Menu.Item>
        <Menu.Item
          key="studyMaterials">
          <Link to="/studyMaterial">Study Materials</Link>
        </Menu.Item>

        <Menu.Item
          key="menuBarSearch"
          className="menuBarSearch">
          <Input.Search
            placeholder="Looking for something?"
            onSearch={onSearch}
            enterButton
            allowClear
            className="menuBarSearchInput" />
        </Menu.Item>
      </Menu>
    </Header>
  )
}