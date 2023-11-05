import { Button, Tabs, TabsProps, Typography } from "antd"
import { DownloadOutlined, FilePdfOutlined } from "@ant-design/icons"

import mockSearchResultData from "src/mock-data/mockSearchResultData"

import styles from "./styles.module.scss"
import FileCardList from "../FileCardList"

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
]

const SearchResult = () => {
  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <div className={styles.searchResult}>
      <div className={styles.header}>
        <Typography.Title level={2}>
          "{mockSearchResultData.resultTitle}"
        </Typography.Title>
        <Typography>Found {12} search results</Typography>
      </div>
      <div className={styles.foundIn}>
        <span>Found in:</span>
        <div>
          <Button shape="round" icon={<FilePdfOutlined />}>
            {"Cars.xls"}
            <DownloadOutlined />
          </Button>
        </div>
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <FileCardList />
    </div>
  )
}

export default SearchResult
