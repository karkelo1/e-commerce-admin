import React from 'react';
import './App.css';
import Navbar from './Home Page/Navbar';
import Footer from './Home Page/Footer';
import Sidebar from './Home Page/Sidebar';
import DashboardPage from "./Home Page/Dashboard Page";
import ItemDetailsPage from "./Home Page/Item Details Page";
import AboutPage from "./Home Page/About Page";
import NotFoundPage from "./Home Page/Not Found Page";
import { Route, Routes } from "react-router-dom";
import List from './Home Page/List';
function App() {
  return (
    <>

        <Navbar />
        <Sidebar />
        <Routes>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/item/:id" component={ItemDetailsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
        </Routes>
        <List />
        <Footer />
    </>

  );
}

export default App;


