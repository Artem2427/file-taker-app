import { Spin, Tabs, TabsProps, Typography } from "antd"

import useFilesStore from "src/store/files"
import FileCardList from "../FileCardList"

import styles from "./styles.module.scss"
import noData from "src/assets/icons/no-data.svg"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "All",
    // children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Steps",
    // children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Test questions",
    // children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Files",
    // children: "Content of Tab Pane 3",
  },
]

const SearchResult = () => {
  const { data, searchValue, isLoading } = useFilesStore()
  const totalFilesLength = data.files?.length + data.videos?.length

  return isLoading ? (
    <div className="spin">
      <Spin />
    </div>
  ) : (
    <div className={styles.searchResult}>
      <Typography.Title level={2}>Home</Typography.Title>
      <Tabs defaultActiveKey="1" items={items} />
      {data.files?.length > 0 || data.videos?.length > 0 ? (
        <div>
          <div className={styles.header}>
            <Typography.Title level={2}>"{searchValue}"</Typography.Title>
            <Typography>Found {totalFilesLength} search results</Typography>
          </div>
          <FileCardList />
        </div>
      ) : (
        <div className={styles.noData}>
          <Typography.Title level={4}>No data found.</Typography.Title>
          <img src={noData} alt="No data" />
        </div>
      )}
    </div>
  )
}

export default SearchResult
