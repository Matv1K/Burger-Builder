import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const Logo = props => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="SimpleBurger" />
    </div>
);

export default Logo;