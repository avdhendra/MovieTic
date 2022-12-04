import { createSlice } from "@reduxjs/toolkit";

const INTIAL_STATE = {
  genres: "",
  searchQuery: "",
  CategoriesList: [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ],
};

export const categorySlice = createSlice({
  name: "currentCategory",
  initialState: INTIAL_STATE,
  reducers: {
    selectGenres: (state, action) => {
      state.genres = action.payload;
      state.searchQuery = "";
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
   
  },
});

export const { selectGenres, searchMovie,setPage } = categorySlice.actions;
export const category = (state) => state.currentCategory.CategoriesList
export const Genres = (state) => state.currentCategory.genres
export const searchTerm=(state)=>state.currentCategory.searchQuery
export default categorySlice.reducer;
