import PostList from '../../postList/PostList';

import './blogPage.sass';

const BlogPage = () => {
    return(
        <section className="blog-page">
            <h1 className="title blog-page__title">Our Blog</h1>
            <p className="blog-page__descr">
            We are passionate about the industry we take part in, and we know well enoudh, how foreign it looks to out clients. Wedding photography and videography is way more complex than just pressing a button, and we would like to introduce you to all the little details that ususally behind the stage.
            <br/>
            <br/>
            <span>Welcome!</span>
            </p>
            <PostList/>
        </section>
    )
}

export default BlogPage;