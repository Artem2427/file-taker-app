import { Link } from "react-router-dom"
import { Badge, Card, Typography } from "antd"

import { IFile } from "src/store/files"

import styles from "./styles.module.scss"

interface IFileProps extends IFile {
  url?: string
  captions?: any
}

const FileCard = ({
  title,
  originalName,
  trancription,
  url,
  captions,
}: IFileProps) => {
  const extension = originalName?.match(/\.[^.]+$/)?.[0]?.slice(1)

  const extractVideoID = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)

    if (match && match[2]?.length === 11) {
      return match[2]
    } else {
      return null
    }
  }

  const showDescription = (description: string): string => {
    return description?.length > 100
      ? description.slice(0, 100) + "..."
      : description
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    return `${minutes}:${remainingSeconds}`
  }

  const timeStamp = captions?.length
    ? Math.floor(captions?.[0]?.offset / 1000) - 1
    : 0

  const videoId = extractVideoID(url || "")
  const link = `https://www.youtube.com/embed/${videoId}?start=${timeStamp}`

  // const text = captions?.[0].text.match

  return (
    <Link to="#" className={styles.link}>
      <Card className={styles.fileCard} title={null} bordered={true}>
        {url && (
          <iframe
            width={180}
            height={108}
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
        <div>
          <div className={styles.header}>
            <Typography.Title level={5} className={styles.cardTitle}>
              {title}
            </Typography.Title>
            <Badge
              count={extension ? "." + extension : "Youtube"}
              showZero
              color="#faad14"
            />
          </div>
          <div>
            {url && <span>{formatTime(timeStamp)}</span>}
            {trancription ? (
              <p>{showDescription(trancription)}</p>
            ) : (
              <p>{showDescription(captions?.[0]?.text)}</p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default FileCard
