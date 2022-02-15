import { useParams } from 'react-router-dom';
import { setText } from '../../../api/apiSlice';

import Skeleton from '../../skeleton/Skeleton';
import ScrollToTop from '../../../utils/ScrollToTop';
import { useGetPostQuery } from '../../../api/apiSlice';

import './singlePostPage.sass';

const SinglePostPage = () => {
    const {id} = useParams();
    const {
        data: post = {},
        isFetching,
        isLoading
    } = useGetPostQuery(id);


    if(isFetching || isLoading) {
        return(
            <>
                <ScrollToTop/>
                <Skeleton/>
            </>
        )
    }
    return(
        <article className='single-post'>
            <ScrollToTop/>
            <div className="container">
                <h1 className="single-post__title">{post.title}</h1>
                <img src={post.img} alt={post.title} className="single-post__img" />
                <p className="single-post__descr" dangerouslySetInnerHTML={setText(post.text)}>
                </p>
            </div>
        </article>
    )
}

export default SinglePostPage;