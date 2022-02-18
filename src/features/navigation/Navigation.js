import { useState, useEffect, useRef } from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

import ScrollToTop from '../../utils/ScrollToTop';
import bg from '../../assets/navigation/bg.jpg';

import './navigation.sass';

const Navigation = () => {
    const [openNav, setOpenNav] = useState(false);
    const ref = useRef();

    const changeNavStatus = (e) => {
         if (e.currentTarget !== e.target) {
            setOpenNav(state => !state);
        } 
    }

    useEffect(() => {
        const listener = event => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          setOpenNav(false);
        };
        document.addEventListener('click', listener);
        return () => {
          document.removeEventListener('click', listener);
        };
    },[ref]);

    const navClasses = classNames({
        'nav' : true,
        'nav_active' : openNav
    });
    
    return(
        <header ref={ref}>
        <ScrollToTop/>
        <img src={bg} alt="Background" className="nav__img" />
        <nav className={navClasses}>
            <ul onClick={changeNavStatus}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav__link nav__link_active" : "nav__link"}>Главная страница</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav__link nav__link_active" : "nav__link"}>Обо мне</NavLink>
                </li>
                <li>
                    <NavLink to="/reviews" className={({ isActive }) => isActive ? "nav__link nav__link_active" : "nav__link"}>Рецензии</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={({ isActive }) => isActive ? "nav__link nav__link_active" : "nav__link"}>Контакты</NavLink>
                </li>
            </ul>
        </nav>
        <div className="nav__hamburger"
             onClick={() => setOpenNav(state => !state)}>
                <span></span>
                <span></span>
                <span></span>
        </div>
        </header>
    )
}

export default Navigation;