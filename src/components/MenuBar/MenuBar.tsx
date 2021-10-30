import React, { useState } from "react";
import { Layout, Menu, Input } from "antd";
import "./MenuBar.scss";

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
          Home Page
        </Menu.Item>
        <Menu.Item
          key="articles">
          Articles
        </Menu.Item>
        <Menu.Item
          key="studyMaterials">
          Study Materials
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