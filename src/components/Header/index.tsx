import { Layout, Input, Button } from "antd"
import { PlusOutlined, SearchOutlined } from "@ant-design/icons"

import styles from "./styles.module.scss"
import circleQuestion from "src/assets/icons/circle-question.svg"
import bellNotification from "src/assets/icons/bell-notification.svg"
import avatar from "src/assets/images/Avatar.png"

const { Header: AntHeader } = Layout

const Header = () => {
  return (
    <AntHeader className={styles.header}>
      <div className={styles.flexWrapper}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          className={styles.searchBox}
        />
        <div className={styles.actions}>
          <img src={circleQuestion} alt="Questions" />
          <img src={bellNotification} alt="Notifications" />
          <Button type="primary" className={styles.button}>
            <PlusOutlined />
          </Button>
        </div>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
      </div>
    </AntHeader>
  )
}

export default Header
