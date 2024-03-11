import { Outlet, Navigate, Link } from "react-router-dom"
import Login from "./Login"

const PrivateRouter = () => {
  //? Context API, redux, localStorage
  const isAuthenticated = true

  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>
}

export default PrivateRouter
