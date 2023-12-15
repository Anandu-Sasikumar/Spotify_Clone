import { Link } from 'react-router-dom';
import './Home.css';

export default function Topbar() {
  return (
    <>

      <div className='topbar'>
        <div className='prevNext'>
          <button type='button' className='fa fas fa-chevron-left'></button>
          <button type='button' className='fa fas fa-chevron-right'></button>
        </div>

        <div className='navbar'>
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li className="divider">|</li>
            <li><a href='#'>Sign Up</a></li>
          </ul>
          <Link to="/LoginPage"> <button type='button'>Log In</button></Link>
        </div>
      </div>
    </>
  );
}