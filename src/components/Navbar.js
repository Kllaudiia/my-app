import { Link } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt, FaUser } from 'react-icons/fa';
import '../App.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to='/' className='site-title'>App name</Link>
      <ul>
        <li><CustomLink to='/register' icon={<FaUserPlus />}><a>Register</a> </CustomLink></li>
        <li><CustomLink to='/login' icon={<FaSignInAlt />}> Login</CustomLink></li>
        <li><CustomLink to='/account' icon={<FaUser />}> Your Account</CustomLink></li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, icon, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {icon && <span className="icon">{icon}</span>}
        {children}
      </Link>
    </li>
  );
}