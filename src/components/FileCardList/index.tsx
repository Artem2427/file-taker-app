import { List } from "antd"

import useFilesStore from "src/store/files"
import FileCard from "./FileCard"

import styles from "./styles.module.scss"

const FileCardList = () => {
  const { data } = useFilesStore()

  return (
    <List className={styles.fileCardsList}>
      {data.files.map((file) => (
        <List.Item key={file.id} className={styles.listItem}>
          <FileCard {...file} />
        </List.Item>
      ))}
      {data.videos.map((video) => (
        <List.Item key={video.id} className={styles.listItem}>
          <FileCard {...video} />
        </List.Item>
      ))}
    </List>
  )
}

export default FileCardList
