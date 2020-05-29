import React from 'react';
import './Button.scss'
const Button = ({children,signInWithGoogle,...rest}) => {
    return ( 
        <button className={`${signInWithGoogle ? "google" : "" } button`} {...rest}>
            {children}
        </button>
     );
}
export default Button;