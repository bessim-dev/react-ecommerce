import React from 'react';
import './Header.scss'
import {ReactComponent as Logo} from "./crown.svg"
import {Link} from 'react-router-dom'
import { auth } from '../FireBase/FireBase';
const Header = ({currentUser}) => {
    return ( 
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                
                <Link to="/shop" className="option">Option</Link>
                <Link to="/shop" className="option">Contact</Link>
                {currentUser
                ?
                    <div className="option" onClick={() => auth.signOut()}>SignOut</div>
                
                :
                    <Link to="/Auth" className="option">Auth</Link>
                
                }
            </div>
        </div>
     );
}
 
export default Header;