import {Link} from 'react-router-dom';

import bg from '../../assets/navigation/bg.jpg';

import './navigation.sass';

const Navigation = () => {
    return(
        <header>
        <img src={bg} alt="Background" className="nav__img" />
        <nav className="nav">
            <ul>
                <li>
                    <a href="!#" className="nav__link">Главная страница</a>
                </li>
                <li>
                    <a href="!#" className="nav__link">Обо мне</a>
                </li>
                <li>
                    <a href="!#" className="nav__link">Рецензии</a>
                </li>
                <li>
                    <a href="!#" className="nav__link">Контакты</a>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Navigation;