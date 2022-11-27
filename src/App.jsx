import { CssBaseline } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useStyles from './styles';
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from './component/index';

function App() {
  const classes = useStyles();
  return (
    <Main>
      <CssBaseline />
      <NavBar />
      <Content>
        <StyledToolbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/categories/:id" element={<Movies />} />
          <Route path="/genre/:id" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Content>
      <div ref={alanBtnContainer} />
    </Main>
  );
}

export default App;
