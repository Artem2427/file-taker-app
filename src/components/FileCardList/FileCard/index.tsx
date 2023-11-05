import { Badge, Card, Typography } from "antd"

import mockFileCardData from "src/mock-data/mockFileCardData"

import styles from "./styles.module.scss"
import { Link } from "react-router-dom"

const FileCard = () => {
  const showImage =
    mockFileCardData.format === ".jpg" || mockFileCardData.format === ".png"

  const title = (
    <>
      <Typography.Title level={5} className={styles.cardTitle}>
        {mockFileCardData.title}
      </Typography.Title>
      <Badge count={".xls"} showZero color="#faad14" />
    </>
  )

  const showDescription = (description: string): string => {
    return description.length > 100
      ? description.slice(0, 100) + "..."
      : description
  }

  return (
    <Link to="#" className={styles.link}>
      <Card className={styles.fileCard} title={title} bordered={true}>
        {showImage && <img src={"#"} alt="Preview" />}
        <p>{showDescription(mockFileCardData.description)}</p>
        <div className={styles.breadcrumbs}>
          <span>{mockFileCardData.breadcrumbs}</span>
        </div>
      </Card>
    </Link>
  )
}

export default FileCard
