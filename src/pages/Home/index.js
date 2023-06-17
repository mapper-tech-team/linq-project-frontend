import React, { Component, useEffect, useState } from 'react'
import './style.css';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import api from '../../Api/api';


const Home = () => {

  const [projetos, setProjetos] = useState([]);
  const projetosArray = [
    {
      "id": 2,
      "nome": "Star Coffee",
      "descricao": "Projeto para criar um cardápio digital para os clientes de uma cafeteria",
      "foto": "",
      "documentacao": "",
      "alunoId": 1,
      "status": "INICIADO",
      "telefone": "2134563242",
      "linkedin": "www.linkedin.com/startcoffee",
      "github": "www.github.com/starcoffee"
    },
    {
      "id": 2,
      "nome": "Star Coffee",
      "descricao": "Projeto para criar um cardápio digital para os clientes de uma cafeteria",
      "foto": "",
      "documentacao": "",
      "alunoId": 1,
      "status": "INICIADO",
      "telefone": "2134563242",
      "linkedin": "www.linkedin.com/startcoffee",
      "github": "www.github.com/starcoffee"
    },
    {
      "id": 2,
      "nome": "Star Coffee",
      "descricao": "Projeto para criar um cardápio digital para os clientes de uma cafeteria",
      "foto": "",
      "documentacao": "",
      "alunoId": 1,
      "status": "INICIADO",
      "telefone": "2134563242",
      "linkedin": "www.linkedin.com/startcoffee",
      "github": "www.github.com/starcoffee"
    },
    {
      "id": 2,
      "nome": "Star Coffee",
      "descricao": "Projeto para criar um cardápio digital para os clientes de uma cafeteria",
      "foto": "",
      "documentacao": "",
      "alunoId": 1,
      "status": "INICIADO",
      "telefone": "2134563242",
      "linkedin": "www.linkedin.com/startcoffee",
      "github": "www.github.com/starcoffee"
    },
    {
      "id": 2,
      "nome": "Star Coffee",
      "descricao": "Projeto para criar um cardápio digital para os clientes de uma cafeteria",
      "foto": "",
      "documentacao": "",
      "alunoId": 1,
      "status": "INICIADO",
      "telefone": "2134563242",
      "linkedin": "www.linkedin.com/startcoffee",
      "github": "www.github.com/starcoffee"
    },
    {
      "id": 2,
      "nome": "Star Coffee",
      "descricao": "Projeto para criar um cardápio digital para os clientes de uma cafeteria",
      "foto": "",
      "documentacao": "",
      "alunoId": 1,
      "status": "INICIADO",
      "telefone": "2134563242",
      "linkedin": "www.linkedin.com/startcoffee",
      "github": "www.github.com/starcoffee"
    },
    {
      "id": 2,
      "nome": "Star Coffee",
      "descricao": "Projeto para criar um cardápio digital para os clientes de uma cafeteria",
      "foto": "",
      "documentacao": "",
      "alunoId": 1,
      "status": "INICIADO",
      "telefone": "2134563242",
      "linkedin": "www.linkedin.com/startcoffee",
      "github": "www.github.com/starcoffee"
    },
    {
      "id": 3,
      "nome": "Ajaks",
      "descricao": "Projeto que visa facilitar a criação de dispositivos embarcados",
      "foto": "",
      "documentacao": "",
      "alunoId": 3,
      "status": "EM_ANDAMENTO",
      "telefone": "6234256",
      "linkedin": "www.linkedin.com/ajaks",
      "github": "www.github.com/ajaks"
    }
  ]

  useEffect(() => {
    setProjetos(projetosArray)

    const userToken = localStorage.getItem("user_token");

    // (async () => {
    //   const config = {
    //     headers: {
    //       'Authorization': 'Bearer ' + userToken
    //     }
    //   }
    //   const { data } = await api.get('/projeto/obter', config);

    //   setProjetos(data);
    // })();
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