import React from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import ScrollToTop from './components/ScrollToTop';
import { RenderRoutes } from './routes/routes';
import './styles/App.scss';
import './styles/index.scss';

function App() {
  return (
    <>
      <MenuBar />
      {/* compensated for the sticky menubar */}
      <div style={{ height: 64 }} />
      
      {/* router for pages */}
      <RenderRoutes />
    </>
  );
}

export default App;
