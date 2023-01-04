import { useContext, useEffect } from 'react'

import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from '../utils/ToggleColorMode';
import { useDispatch } from 'react-redux';
import { searchMovie, selectGenres } from '../Features/categorySlice';
import { fetchToken } from '../utils';




const Ai = () => {
const dispatch=useDispatch()
const {setMode}=useContext(ColorModeContext)

    useEffect(() => {
      alanBtn({
        key: "e82a55d76f62bd25c2e484ca5efedfdd2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
          if (command === "changeMode") {
            if (mode === "light") {
              setMode("light");
            } else {
              setMode("dark");
            }
            // Call the client code that will react to the received command
          } else if (command === "chooseGenre") {
            const foundGenre = genres.find(
              (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
            );
            if (foundGenre) {
             // window.location.href = "/";
              dispatch(selectGenres(foundGenre.id));
            } else {
              const category = genreOrCategory.startsWith("top")
                ? "top_rated"
                : genreOrCategory;
              window.location.href = "/";
              dispatch(selectGenres(category));
            }
          } else if (command === "login") {
            fetchToken();
          } else if (command === "logout") {
            localStorage.clear();
            window.location.href = "/";
          } else if (command === "search") {
            dispatch(searchMovie(query));
          }
        },
      });
    }, [dispatch,setMode]);

}

export default Ai