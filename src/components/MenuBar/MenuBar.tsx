import React, { useState } from "react";
import { Layout, Menu, Input } from "antd";
import "./MenuBar.scss";
import { Link } from "react-router-dom";

const { Header } = Layout;

export default function MenuBar () {
  
  const [selectedKey, setSelectedKey] = useState("homepage")

  const onSelectKey = (event: any) => {
    setSelectedKey((event.key === "menuBarSearch")? selectedKey : event.key);
  }

  const onSearch = (words: string) => {
    console.log(words);
  }
  
  return (
    <Header
      className="menuBar"
    >
      <Menu
        theme="light"
        mode="horizontal"
        onSelect={onSelectKey}
        selectedKeys={[selectedKey]}>
        <Menu.Item
          key="homepage">
          <Link to="/">Betonamu@</Link>
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