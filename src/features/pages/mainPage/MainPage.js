import './mainPage.sass';

const MainPage = () => {
    return(
        <>
            <section className="promo">
                <div className="container">
                    <div className="promo__wrapper">
                        <h1 className="promo__title title">Алина Халиева</h1>
                        <h2 className="promo__title title">Пиздатый подзаголовок</h2>
                        <p className="promo__descr">Милая цитата. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="promo__menu-wrapper">
                            <ul className="promo__themes">
                                <li className="promo__theme">
                                    <a href="!#" className="promo__link">Фильмы</a>
                                </li>
                                <li className="promo__theme">
                                    <a href="!#" className="promo__link">Музыка</a>
                                </li>
                                <li className="promo__theme">
                                    <a href="!#" className="promo__link">Одежда</a>
                                </li>
                                <li className="promo__theme">
                                    <a href="!#" className="promo__link">Книги</a>
                                </li>
                                <li className="promo__theme">
                                    <a href="!#" className="promo__link">Что-то ещё</a>
                                </li>
                            </ul>
                            <div className="promo__quote__wrapper">
                                <p className="promo__quote">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="reviews">
                <div className="reviews__all">
                    <p className="reviews__title">Все рецензии</p>
                    <a href="!#" className="btn reviews__btn">ПОСМОТРЕТЬ</a>
                </div>
                <div className="reviews__taste">
                    <div className="container">
                        <h2 className="reviews__taste__title">РЕЦЕНЗИИ
                        <span>на любой вкус</span></h2>
                        <ul className="reviews__last">
                            <li className="reviews__item">
                                <p className="reviews__item__title">INTERNATIONAL WEDDINGS</p>
                                <p className="reviews__item__descr">Our clients come from various ethnical backgrounds, and many of them choose to continue their families’ legacies and bring their own traditions and rituals into their weddings. Since Toronto is a very multi-cultural city, we believe it is very important to highlight our expertease in covering Chinese, Korean, Sikh, and other weddings that are rich in customs.
                                </p>
                                <a href="!#" className="btn reviews__item__btn">Читать</a>
                            </li>
                            <li className="reviews__item">
                                <p className="reviews__item__title">INTERNATIONAL WEDDINGS</p>
                                <p className="reviews__item__descr">Our clients come from various ethnical backgrounds, and many of them choose to continue their families’ legacies and bring their own traditions and rituals into their weddings. Since Toronto is a very multi-cultural city, we believe it is very important to highlight our expertease in covering Chinese, Korean, Sikh, and other weddings that are rich in customs.
                                </p>
                                <a href="!#" className="btn reviews__item__btn">Читать</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;