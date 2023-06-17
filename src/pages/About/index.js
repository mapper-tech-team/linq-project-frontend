import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from 'react';
import { Component } from 'react';
import Mappertech from '../../assets/Mappertech.png';

function About() {
  return (
    <>
    <Navbar />
    
    <C.Container>
      <C.Label>Sobre o LinQProject</C.Label>

      <div><img src={Mappertech} width={350} height={200}></img></div>
      <C.Content style={{borderRadius: "25px", fontSize: "18px"}}>
      
            
          <div style={{textAlign: "center"}}>
            <h3><b>Missão:</b></h3>
            <p>Ser uma plataforma que possa auxiliar estudantes a maximizar o aproveitamento da vida acadêmica, isto é, armazenando os projetos criados pelos mesmos e gerando um portfólio ao longo do tempo</p>
                    
          </div>
      </C.Content>
      <C.Content  style={{ marginTop: "50px", borderRadius: "25px", fontSize: "18px"}}>
          <div style={{textAlign: "center"}}>
          <h3><b>Visão:</b></h3>
            <p>ser uma plataforma cada vez mais acessada e com recursos que possam agregar valor para estudantes com ideias inovadoras</p>
          </div>
      </C.Content>

      <C.Content style={{marginTop: "50px", borderRadius: "25px", fontSize: "18px"}}>
          <div style={{textAlign: "center"}}>
          <h3><b>Valores: </b></h3>
            <p>Honestidade, transparência, empatia</p>
          </div>
      </C.Content>
    </C.Container>
    <Footer />
    </>
  )
}

export default About