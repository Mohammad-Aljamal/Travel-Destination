import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbar(props) {
  return (
    <>
      <nav className="nav">
      <div className= "li"><Link className='link' to="/">Home</Link></div>
      </nav>
    </>
  );
}

export default Navbar;
