import {Link} from "react-router-dom"

function NotFound () {
  return (
    <>
      <h1>Page Not Found</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

export default NotFound