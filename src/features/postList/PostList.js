import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-css';

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
    
    const renderPostList = (arr) => {
        if (arr.length === 0) {
            return <p className='post-list__items__empty'>Извините, рецензий на эту тему пока нет</p>
        }

        return arr.map(({id, ...props}) => {
            return <PostListItem key={id} id={id} {...props}/>
        });
    }

    const breakpointColumnsObj = {
        default: 2,
        768: 1
      };

    return(
        <div className="container">
            <div className="post-list">
                <Masonry
                    className="post-list__items"
                    breakpointCols={breakpointColumnsObj}
                    columnClassName="my-masonry-grid_column">
                    <div className="post-list__categories">
                        <h3 className="post-list__categories__title">Категории</h3>
                        <div className="post-list__categories__filters">
                            <Filters postList/>
                        </div>
                    </div>
                    {renderPostList(filteredPosts)}
                </Masonry>
            </div>
        </div>
    )
}

export default PostList;