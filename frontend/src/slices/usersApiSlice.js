// this does not creates 'product' on redux dev tool like 'auth' and 'cart' because it is with its parent 'api' slice

import { USERS_URL } from "../constants";
// use apiSlice instead of createSlice as the endpoints are async
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({

  // builder has method for query
  // this query will replace the fetch request to backend in HomeScreen.jsx
  endpoints: (builder) => ({
    // make a post request
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data, // sends data in the body
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`, // make a post request to register api
        method: 'POST',
        body: data,
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`, // make a post request to /logout to remove cookie
        method: 'POST', // no body because there is nothing to send
      })
    }),
  }),
});

// addd 'use' in the front and 'mutation' in the back of the function
export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = usersApiSlice;