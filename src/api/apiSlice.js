import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const alinaApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        }),
        getPost: builder.query({
            query: id => `/posts/${id}`
        })
    })
});

export const { useGetPostsQuery, useGetPostQuery } = alinaApiSlice;