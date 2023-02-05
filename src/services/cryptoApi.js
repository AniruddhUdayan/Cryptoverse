import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'b446f4dc56msh834e3a1165ec4fep135cb5jsn009df5324af3',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ uuid, timeperiod }) =>
        createRequest(`coin/${uuid}/history?timeperiod=${timeperiod}`),
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
