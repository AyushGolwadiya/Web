import React from 'react';
import './index.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <div id="main">
        <Header/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>
      </div>
    </>
  )
}

export default App