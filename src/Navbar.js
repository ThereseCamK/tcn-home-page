import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './img/CBigger2.png';




export default function Navbar() {
  return (
    
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={logo} className="App-logo" alt="logo" /> 
      </Link>
      <ul>
        <CustomLink to="/projects">Prosjekter</CustomLink>
        <CustomLink to="/about">Om</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
