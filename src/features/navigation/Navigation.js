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
                    <Link to="/" className="nav__link">Главная страница</Link>
                </li>
                <li>
                    <Link to="/about" className="nav__link">Обо мне</Link>
                </li>
                <li>
                    <Link to="/reviews" className="nav__link">Рецензии</Link>
                </li>
                <li>
                    <Link to="/contacts" className="nav__link">Контакты</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Navigation;