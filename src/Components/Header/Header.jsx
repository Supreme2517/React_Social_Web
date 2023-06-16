import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return(
        <header className={s.header}>
            
       <div className={s.loginBlock}>
        { props.isAuth 
        ? <div className={s.logout}> {props.login} <button onClick = {props.logout} className={s.btn_logout}>Log out</button></div>
        : <div className={s.login}> <NavLink to={'/login'} className={ s.login_link}> Login </NavLink>  </div>
    } </div>   
        
        
        </header>
    )
}

export default Header;