import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./components/Main/MainContainer.js";
import styles from './App.module.css';
import Layout from './components/Layout/Layout.js'
import NavigationBar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import globalStyles from './components/Styles/Styles.js';

function App() {
  return (
    <div>
        <Router>        
          <NavigationBar />      
          <Layout>      
          <Route exact
            path="/"
            component={Main} />
          <Route
            path="/about"
            component={Main} />        
            </Layout>            
            <Footer />
        </Router>
    </div >
  );
}

export default App;

