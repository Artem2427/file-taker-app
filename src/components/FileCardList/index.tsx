import { List } from "antd"

import FileCard from "./FileCard"

import styles from "./styles.module.scss"

const FileCardList = () => {
  return (
    <List className={styles.fileCardsList}>
      {Array.from({ length: 8 }).map((_, i) => (
        <List.Item key={i} className={styles.listItem}>
          <FileCard />
        </List.Item>
      ))}
    </List>
  )
}

export default FileCardList
