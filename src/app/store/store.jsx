import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../Features/authSlice";
import categoryReducer from "../../Features/categorySlice";
import { tmdbApi } from "../../services/TMDB";

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentCategory: categoryReducer,
    user: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});