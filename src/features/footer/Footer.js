import {Link} from 'react-router-dom'

import { useGetPostsQuery } from '../../api/apiSlice';

import './footer.sass';

const Footer = () => {
    const {
        data: posts = []
    } = useGetPostsQuery();

    const findBestPosts = (tag) => {
        const bestPosts = posts.filter(post => post.best === true && post.tag === tag);

        if(bestPosts.length > 0) {
            return bestPosts.map(post => {
                return (
                    <li className="footer__item" key={post.id}>
                        <Link to={`/reviews/${post.id}`}>{post.title}</Link>
                    </li>
                )
            })
        } else {
            return <p className="footer__item">Извините, рецензий пока нет</p>
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__categories">
                        <h3 className="footer__title">ЛУЧШИЕ РЕЦЕНЗИИ НА КИНО</h3>
                        <ul className="footer__list">
                            {findBestPosts("movies")}
                        </ul>
                    </div>
                    <div className="footer_categories">
                        <h3 className="footer__title">ЛУЧШИЕ РЕЦЕНЗИИ НА КНИГИ</h3>
                        <ul className="footer__list">
                            {findBestPosts("books")}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;