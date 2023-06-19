import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseURL } from 'services/constants';
import { EndpointsAuth } from './constants';
import { AuthRequestData } from './types';

export const authService = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),

  endpoints: (builder) => ({
    signIn: builder.mutation<void, AuthRequestData>({
      query: (data) => ({
        method: 'POST',
        url: EndpointsAuth.SignIn,
        body: data,
      }),
    }),

    registration: builder.mutation<void, AuthRequestData>({
      query: (data) => ({
        method: 'POST',
        url: EndpointsAuth.Registration,
        body: data,
      }),
    }),

    setNewPassword: builder.mutation<void, AuthRequestData>({
      query: (data) => ({
        method: 'POST',
        url: EndpointsAuth.NewPassword,
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useSignInMutation, useSetNewPasswordMutation } =
  authService;
