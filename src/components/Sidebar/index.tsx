import React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  BookOutlined,
  FileOutlined,
  GroupOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import type { MenuProps } from "antd"
import { Menu } from "antd"

import styles from "./styles.module.scss"
import trainualLogo from "src/assets/images/Trainual_logo.png"

type MenuItem = Required<MenuProps>["items"][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onClick?: any,
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
    type,
  } as MenuItem
}

const Sidebar: React.FC = () => {
  const location = useLocation()

  const items: MenuItem[] = [
    getItem("Home", "1", <HomeOutlined />, undefined),
    getItem("Content", "2", <BookOutlined />),
    getItem("People", "sub1", <GroupOutlined />, [
      getItem("Option 3", "3"),
      getItem("Option 4", "4"),
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
    getItem("Groups", "7", <GroupOutlined />),
    getItem("Reports", "sub2", <FileOutlined />, [
      getItem("Option 8", "8"),
      getItem("Option 9", "9"),
    ]),
    getItem("Account", "sub3", <SettingOutlined />, [
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
    ]),
  ]
  // const [collapsed, setCollapsed] = useState(false)

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed)
  // }

  const isTestsPage = location.pathname === "/tests"

  return (
    <div className={styles.sidebar}>
      <Link className={styles.logo} to="/">
        <img src={trainualLogo} alt="Logo" />
      </Link>
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}

      <Menu
        items={items}
        mode="inline"
        selectedKeys={isTestsPage ? ["4"] : undefined}
      />
    </div>
  )
}

export default Sidebar
