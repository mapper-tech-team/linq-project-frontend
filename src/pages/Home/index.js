import React, { Component, useEffect, useState } from 'react'
import './style.css';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import api from '../../Api/api';


const Home = () => {

  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/projeto/obter');

      setProjetos(data);
    })();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container">
        <h1>Projetos</h1>
        <Card projetos={projetos} />
    </div>
    <Footer />
    </>
  )
}; 

export default Home;