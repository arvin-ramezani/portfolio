import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IHomePageGetResponse } from '@/pages/api';

// Define a service using a base URL and expected endpoints
export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCoursesByPage: builder.query<IHomePageGetResponse, string>({
      // query: (name) => `pokemon/${name}`,
      query: (page) => `?courses=true&coursesPage=${page}`,
    }),
  }),
});

export const { useGetCoursesByPageQuery } = coursesApi;
