import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Filters from '../filters/Filters';
import PostListItem from '../postListItem/PostListItem';
import {useGetPostsQuery} from '../../api/apiSlice';

import './postList.sass';

const PostList = () => {
    const activeFilter = useSelector(state => state.filters.activeFilter);

    const {
        data: posts = []
    } = useGetPostsQuery();

    const filteredPosts = useMemo(() => {
        const filteredPosts = posts.slice();

        if (activeFilter === 'all') {
            return filteredPosts;
        } else {
            return filteredPosts.filter(item => item.tag === activeFilter);
        }
    }, [activeFilter, posts]);

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

    uploadPosts(filteredPosts);
    
    const renderPostList = (arr) => {
        if (arr.length === 0) {
            return <p className='post-list__items__empty'>Извините, рецензий на эту тему пока нет</p>
        }

        return arr.map(({id, ...props}) => {
            return <PostListItem key={id} id={id} {...props}/>
        });
    }

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
                    {leftPosts.length !== 0 ? renderPostList(leftPosts) : null}
                </ul>
                <ul className="post-list__items_right">
                    {renderPostList(rightPosts)}
                </ul>
            </div>
        </div>
    )
}

export default PostList;