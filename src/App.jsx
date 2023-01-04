import { CssBaseline } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Content, Main, StyledToolbar } from "./styles";
import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from './component/index';
import useAi from './AlPowered/Ai';


function App() {
  const aiContainer = useRef(null)
  useAi()
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/')
  },[navigate])
  return (
    <>
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
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Content>
      </Main>
      <div ref={aiContainer} />
    </>
  );
}

export default App;
