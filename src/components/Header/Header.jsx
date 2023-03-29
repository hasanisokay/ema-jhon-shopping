import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-info">
                <div className="flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a>Order</a></li>
                        <li><a>Order Review</a></li>
                        <li><a>Manage Inventory</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;