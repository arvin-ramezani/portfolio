import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IHomePageGetRespose } from '@/pages/api';

// Define a service using a base URL and expected endpoints
export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api' }),
  endpoints: (builder) => ({
    getCoursesByPage: builder.query<IHomePageGetRespose, string>({
      // query: (name) => `pokemon/${name}`,
      query: (page) => `?courses=true&coursesPage=${page}`,
    }),
  }),
});

export const { useGetCoursesByPageQuery } = coursesApi;
