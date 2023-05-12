import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import harvardArt from "./data/harvardArt";
// import  GalleryNavigation  from "./components/GalleryNavigation";

const Root = () => {
  return (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
