import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { ConfigProvider, Layout } from "antd"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SearchResult from "./components/SearchResult"

import styles from "./styles.module.scss"

const { Content } = Layout

const ConfigProviderWrapper = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6a28ea",
          borderRadius: 20,
        },
      }}
    >
      <Outlet />
    </ConfigProvider>
  )
}

const AppLayout = () => {
  return (
    <Layout className={styles.container}>
      <Sidebar />
      <Content>
        <Header />
        <SearchResult />
        <Outlet />
      </Content>
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    element: <ConfigProviderWrapper />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(<RouterProvider router={router} />)
