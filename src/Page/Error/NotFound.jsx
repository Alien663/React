import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Sorry for not finding the page:
        <Link>{window.location.pathname}</Link>
      </h2>
      <img src='https://http.cat/404' alt="Page Not Found"></img>
      <h3>It's as difficult as finding a cat from picture</h3>
    </div>
  )
}
export default NotFoundPage