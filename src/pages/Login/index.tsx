import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Card, Form, Input, Layout, Typography } from "antd"
import { LockOutlined, MailOutlined } from "@ant-design/icons"

import styles from "./styles.module.scss"
import trainualLogo from "src/assets/images/Trainual_logo.png"

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Layout className={styles.wrapper}>
      <Card className={styles.card}>
        <div className={styles.logo}>
          <img src={trainualLogo} alt="Logo" />
        </div>

        <Typography.Title level={4} className={styles.title}>
          Sign in
        </Typography.Title>

        <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
          <Form.Item label="Email" name="email">
            <Input
              placeholder="Email"
              prefix={<MailOutlined />}
              {...register("email")}
            />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input
              type="password"
              placeholder="Password"
              prefix={<LockOutlined />}
              {...register("password")}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Go
          </Button>
        </Form>
      </Card>
    </Layout>
  )
}

export default Login
