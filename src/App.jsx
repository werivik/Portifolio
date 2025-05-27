import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnimatedRoutes from './AnimatedRoutes';

import './index.css';

function App() {

  return (
    <Router>
      <Header/>
        <div className="pageContent">
          <main>
            <AnimatedRoutes />
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
