import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    /*TODO: Get Genre */
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //Get Movie By [Type]
    getMovies: builder.query({
      query: ({ GenreName, PageNo, search }) => {
        //*Get Movies by search
      if (search) {
        return `/search/movie?query=${search}&page=${PageNo}&api_key=${tmdbApiKey}`;
      }
        //* Get Movies By Category //we get it as String
        if (GenreName && typeof GenreName === "string") {
          return `movie/${GenreName}?page=${PageNo}&api_key=${tmdbApiKey}`;
        }
        if (GenreName && typeof GenreName === "number") {
          return `discover/movie?with_genres=${GenreName}&page=${PageNo}&api_key=${tmdbApiKey}`;
        }

        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
    // ! Get User Specific Lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
    // ! get User Specific List
    getRecommendations: builder.query({
      query: ({ id, list }) => `/movie/${id}/${list}?api_key=${tmdbApiKey}`,
    }),
    // !
    getActor: builder.query({
      query: (id) => `/person/${id}?api_key=${tmdbApiKey}`,
    }),
    getMoviesByActor: builder.query({
      query: ({ id, page }) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});
export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorQuery,
  useGetMoviesByActorQuery,
  useGetListQuery,
} = tmdbApi;
