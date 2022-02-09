import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const alinaApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        })
    })
});

export const { useGetPostsQuery } = alinaApiSlice;