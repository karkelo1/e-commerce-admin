import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Home Page/Navbar';
import Footer from './Home Page/Footer';
import Sidebar from './Home Page/Sidebar';
import DashboardPage from './Home Page/DashboardPage';
import ItemDetailsPage from './Home Page/ItemDetailsPage';
import AboutPage from './Home Page/AboutPage';
import NotFoundPage from './Home Page/NotFoundPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={DashboardPage} />
          <Route path="/item/:id" component={ItemDetailsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


