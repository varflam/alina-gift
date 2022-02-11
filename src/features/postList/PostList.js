import Filters from '../filters/Filters';
import PostListItem from '../postListItem/PostListItem';
import {useGetPostsQuery} from '../../api/apiSlice';

import './postList.sass';

const PostList = () => {
    const {
        data: posts = []
    } = useGetPostsQuery();

    const leftPosts = [];
    const rightPosts = [];

    const uploadPosts = (arr) => {
        arr.forEach((item, i) => {
            if(i === 0 || i % 2 === 0) {
                leftPosts.push(item);
            } else {
                rightPosts.push(item);
            }
        });
    }

    uploadPosts(posts);

    const left = leftPosts.map(({id, ...props}) => {
        return <PostListItem key={id} id={id} {...props}/>
    });

    const right = rightPosts.map(({id, ...props}) => {
        return <PostListItem key={id} id={id} {...props}/>
    });

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
                    {left}
                </ul>
                <ul className="post-list__items_right">
                    {right}
                </ul>
            </div>
        </div>
    )
}

export default PostList;