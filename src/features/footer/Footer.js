import './footer.sass';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__categories">
                        <h3 className="footer__title">ЛУЧШИЕ РЕЦЕНЗИИ НА КИНО</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="!#">Toronto Wedding Videography</a></li>
                            <li className="footer__item"><a href="!#">Toronto Wedding Videography</a></li>
                            <li className="footer__item"><a href="!#">Toronto Wedding Videography</a></li>
                        </ul>
                    </div>
                    <div className="footer_categories">
                        <h3 className="footer__title">ЛУЧШИЕ РЕЦЕНЗИИ НА КНИГИ</h3>
                        <ul className="footer__list">
                            <li className="footer__item"><a href="!#">Toronto Wedding Videography</a></li>
                            <li className="footer__item"><a href="!#">Toronto Wedding Videography</a></li>
                            <li className="footer__item"><a href="!#">Toronto Wedding Videography</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;