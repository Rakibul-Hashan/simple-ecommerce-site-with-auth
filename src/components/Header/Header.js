import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useSignInWithEmailAndPassword(auth);
    return (
        <nav className='header'>
            <Link to={`/shop`}><img src={logo} alt="" /></Link>
            <div>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {
                    user?.uid ? <NavLink to="/logout">Logout</NavLink>
                        : <NavLink to="/login">Login</NavLink>
                }

            </div>
        </nav>
    );
};

export default Header;