import { useParams } from 'react-router-dom';

import { useGetPostQuery } from '../../../api/apiSlice';

import './singlePostPage.sass';

const SinglePostPage = () => {
    const {id} = useParams();
    const {
        data: post = {}
    } = useGetPostQuery(id);

    if(post.text && post.text.includes("/n")) {
        console.log('trbvc');
    }
    return(
        <article className='single-post'>
            <div className="container">
                <h1 className="single-post__title">{post.title}</h1>
                <img src={post.img} alt={post.title} className="single-post__img" />
                <p className="single-post__descr">
                {post.text}
                </p>
            </div>
        </article>
    )
}

export default SinglePostPage;