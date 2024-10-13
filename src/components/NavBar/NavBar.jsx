import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

import './NavBar.css';


export const Navbar = () => {
  return (
 
  <header>
    <nav className='NavBar'>
        <Link className='logo' to="/">
            Costa Brava
        </Link>
        <ul>
            <li>
              <Link to="/categoria/camisetas">Fiji</Link>
            </li>
            <li>
              <Link to="/categoria/gorros">Bahía</Link>
            </li>
            {/* <li>
             <Link to="/categoria/buzos">BUZOS</Link>
            </li> */}
            <li>
             <CartWidget/>
            </li>
        </ul>
    </nav>
</header>

  );
};




