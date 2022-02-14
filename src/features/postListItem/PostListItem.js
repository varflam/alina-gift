import { Link } from 'react-router-dom';
import { setText } from '../../api/apiSlice';

import './postListItem.sass';

const PostListItem = ({id, title, date, text, tagLabel, img}) => {
    const descr = `${text.substring(0, 210)}...`;

    return(
        <li className="post-list__item">
            <h3 className="post-list__item__title">{title}</h3>
            <div className="post-list__item__info">
                <div className="post-list__item__date">{date}</div>
                    | 
                <div className="post-list__item__category">{tagLabel}</div>
            </div>
            <img src={img} alt={title} className="post-list__item__img" />
            <p className="post-list__item__descr" dangerouslySetInnerHTML={setText(descr)}></p>
            <Link to={`/reviews/${id}`} className="post-list__item__link link">READ MORE</Link>
        </li>
    )
}

export default PostListItem;