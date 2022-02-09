import Filters from '../filters/Filters';

import './postList.sass';

import pic1 from '../../assets/blogPage/pic1.jpg';
import pic2 from '../../assets/blogPage/pic2.jpg';
import pic3 from '../../assets/blogPage/pic3.jpg';

const PostList = () => {
    return(
        <div className="container">
            <div className="post-list">
                <ul className="post-list__items_left">
                    <div className="post-list__categories">
                        <h3 className="post-list__categories__title">CATEGORIES</h3>
                        <div className="post-list__categories__filters">
                            <Filters postList/>
                        </div>
                    </div>
                    <li className="post-list__item">
                        <h3 className="post-list__item__title">9 TIPS FOR WEDDING PHOTOGRAPHERS </h3>
                        <div className="post-list__item__info">
                            <div className="post-list__item__date">30.12.2020 </div>
                                | 
                            <div className="post-list__item__category">Articles, Tips and Tricks</div>
                        </div>
                        <img src={pic3} alt="" className="post-list__item__img" />
                        <p className="post-list__item__descr">Hello people! Paul Tarabozzo here! Today I want to share my 9 tips for wedding photographers to make your life easier, attract more clients, and make them excited to work with you. #1 – Ask more questions. People who found you on the internet or through referrals most likely...</p>
                        <a href="!#" className="post-list__item__link link">READ MORE</a>
                    </li>
                    <li className="post-list__item">
                        <h3 className="post-list__item__title">9 TIPS FOR WEDDING PHOTOGRAPHERS </h3>
                        <div className="post-list__item__info">
                            <div className="post-list__item__date">30.12.2020 </div>
                                | 
                            <div className="post-list__item__category">Articles, Tips and Tricks</div>
                        </div>
                        <img src={pic1} alt="" className="post-list__item__img" />
                        <p className="post-list__item__descr">Hello people! Paul Tarabozzo here! Today I want to share my 9 tips for wedding photographers to make your life easier, attract more clients, and make them excited to work with you. #1 – Ask more questions. People who found you on the internet or through referrals most likely...</p>
                        <a href="!#" className="post-list__item__link link">READ MORE</a>
                    </li>
                </ul>
                <ul className="post-list__items_right">
                    <li className="post-list__item">
                        <h3 className="post-list__item__title">9 TIPS FOR WEDDING PHOTOGRAPHERS </h3>
                        <div className="post-list__item__info">
                            <div className="post-list__item__date">30.12.2020 </div>
                                | 
                            <div className="post-list__item__category">Articles, Tips and Tricks</div>
                        </div>
                        <img src={pic2} alt="" className="post-list__item__img" />
                        <p className="post-list__item__descr">Hello people! Paul Tarabozzo here! Today I want to share my 9 tips for wedding photographers to make your life easier, attract more clients, and make them excited to work with you. #1 – Ask more questions. People who found you on the internet or through referrals most likely...</p>
                        <a href="!#" className="post-list__item__link link">READ MORE</a>
                    </li>
                    <li className="post-list__item">
                        <h3 className="post-list__item__title">9 TIPS FOR WEDDING PHOTOGRAPHERS </h3>
                        <div className="post-list__item__info">
                            <div className="post-list__item__date">30.12.2020 </div>
                                | 
                            <div className="post-list__item__category">Articles, Tips and Tricks</div>
                        </div>
                        <img src={pic3} alt="" className="post-list__item__img" />
                        <p className="post-list__item__descr">Hello people! Paul Tarabozzo here! Today I want to share my 9 tips for wedding photographers to make your life easier, attract more clients, and make them excited to work with you. #1 – Ask more questions. People who found you on the internet or through referrals most likely...</p>
                        <a href="!#" className="post-list__item__link link">READ MORE</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PostList;