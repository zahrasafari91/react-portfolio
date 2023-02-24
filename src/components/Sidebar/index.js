import { useState } from 'react'
import './index.scss';
import {Link , NavLink} from 'react-router-dom'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser, faBars, faClose,} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleToggleNavbar = () => {
        setShowNavbar(!showNavbar);
        console.log('Navbar toggled');
    }
    // console.log(showNavbar)
    return(
    <div className='nav-bar'>
    {/* <Link className='logo' to='/'>
        <img src={LogoS} alt="logo"/>
        <img className='sub-logo' src={LogoSubtitle} alt="logo"/>
    </Link> */}
    <nav className={showNavbar ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={handleToggleNavbar}>
            <FontAwesomeIcon icon={faHome} color="#ada823" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={handleToggleNavbar}>
            <FontAwesomeIcon icon={faUser} color="#ada823" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={handleToggleNavbar}>
            <FontAwesomeIcon icon={faEnvelope} color="#ada823" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={handleToggleNavbar}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
    </nav>
    <ul>
        <li>
            <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/zahrasafari/'>
                <FontAwesomeIcon icon={faLinkedinIn} color="4d4d4e" className="anchor-icon"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href='https://github.com/zahrasafari91'>
                <FontAwesomeIcon icon={faGithub} color="4d4d4e" className="anchor-icon"/>
            </a>
        </li>
    </ul>
     
    <FontAwesomeIcon 
          onClick={handleToggleNavbar}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
</div>
)

}

export default Sidebar;


