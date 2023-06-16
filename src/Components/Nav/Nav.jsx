import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import logo from'../Assets/Image/vecteezy_watercolor-deer-t-shirt-logo-transparent-background_13994244_566.png'

const SetActive = ({ isActive }) => isActive ? 'active-nav-link' : '';

const Nav = () => {
    return(
        <div className={s.nav}>
            <img alt = '' src={logo}/>
            <div className={s.item}>
               <NavLink to='/profile' className={SetActive}> Profile </NavLink>
            </div >
            <div className={s.item}>
               <NavLink to='/dialogs' className={SetActive}> Messages </NavLink>
            </div>
            <div className={s.item}>
               <NavLink to='/users' className={SetActive}> Users </NavLink>
            </div>
            <div className={s.item}>
            <NavLink to='/news' className={SetActive}> News </NavLink>
            </div>
            <div className={s.item}>
            <NavLink to='/music' className={SetActive}> Music </NavLink> 
            </div>
            <div className={s.item}>
            <NavLink to='/setting' className={SetActive}> Settings </NavLink>
            </div>
        </div>
    )
}

export default Nav;