import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menu, setMenu] = useState(false);
    return (
        <div className="header">
            <img src={Logo} className='logo' alt="logo" />
            {(menu === false && mobile === true) ? (
                <div
                    style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
                    onClick={() => setMenu(true)}
                >
                    <img style={{ width: '1.5rem', height: '1.5rem' }} src={bars} alt="" />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li>
                        <Link
                            onClick={() => setMenu(false)}
                            to='home'
                            span={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenu(false)}
                            to='programs'
                            span={true}
                            smooth={true}
                        >
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenu(false)}
                            to='reasons'
                            span={true}
                            smooth={true}
                        >
                            Why us
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenu(false)}
                            to='plans'
                            span={true}
                            smooth={true}
                        >
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenu(false)}
                            to='testimonials'
                            span={true}
                            smooth={true}
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Header