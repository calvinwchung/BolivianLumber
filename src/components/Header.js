import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import '../components/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    function getNavBarClassName() {
        let className = location.pathname !== '/' ? 'navbar2' : 'navbar'
        return className
    }

    return (
        <Navbar className={(getNavBarClassName()) + (navbar ? 'navbar active' : '')} dark sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto navBarNav' navbar>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/'>
                            || BOLVIANLUMBERLLC ||
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/inventory'>
                            INVENTORY
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/about'>
                            ABOUT
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link navBarItems' to='/contact'>
                            CONTACT
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
 