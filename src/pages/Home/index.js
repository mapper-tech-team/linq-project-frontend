import React, { Component } from 'react'
import './style.css';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="container">
        <h1>Projetos</h1>
        <Card />
    </div>
    <Footer />
    </>
  )
}; 

export default Home;