import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useGetPostsQuery, setText } from '../../../api/apiSlice';
import Filters from '../../filters/Filters';
import { setFilter } from '../../filters/filtersSlice';

import './mainPage.sass';

const MainPage = () => {
    const dispatch = useDispatch();
    const {
        data: posts = []
    } = useGetPostsQuery();

    const getLastestPosts = () => {
        if(posts) {
            return posts.map((post, i) => {
                const descr = `${post.text.substring(0, 350)}...`;
                if(i === 0 || i === 1) {
                    return (
                        <li key={post.id} className="reviews__item">
                                <p className="reviews__item__title">{post.title}</p>
                                <p className="reviews__item__descr"dangerouslySetInnerHTML={setText(descr)}></p>
                                <Link to={`/reviews/${post.id}`} className="btn reviews__item__btn">Читать</Link>
                        </li>
                    )
                } else {
                    return;
                }
            })
        }
    }

    return(
        <>
            <section className="promo">
                <div className="container">
                    <div className="promo__wrapper">
                        <h1 className="promo__title title">Алина Халиева</h1>
                        <h2 className="promo__title title">Пиздатый подзаголовок</h2>
                        <p className="promo__descr">Милая цитата. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className="promo__menu-wrapper">
                            <Filters/>
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
                    <Link   
                        to="/reviews" 
                        className="btn reviews__btn"
                        onClick={() => dispatch(setFilter('all'))}>ПОСМОТРЕТЬ</Link>
                </div>
                <div className="reviews__taste">
                    <div className="container">
                        <h2 className="reviews__taste__title">РЕЦЕНЗИИ
                        <span>на любой вкус</span></h2>
                        <ul className="reviews__last">
                            {getLastestPosts()}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;