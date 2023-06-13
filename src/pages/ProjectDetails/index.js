import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from '../../Api/api';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './style.css';

const ProjectDetails = () => {

    const [projeto, setProjeto] = useState({});
    const params = useParams();
    const userId = localStorage.getItem("user_id");
    const userPerfil = localStorage.getItem("user_perfil");

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        (async () => {

            const config = {
                headers: {
                  'Authorization': 'Bearer ' + userToken
                }
              }

            const { data } = await api.get('/projeto/obter/' + params.id, config); 
      
            setProjeto(data);

            
          })().catch(err => console.log(err));
    }, []);

  return (
    <>
        <Navbar />
        <div className='details'>
            <div className='big-img'>
              <img src={projeto.foto ? projeto.foto : "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"} />
            </div>

            <div className='box'>
              <div className="row">
                <h2>Nome do projeto: {projeto.nome}</h2>
                <span>Status do projeto: {projeto.status === "INICIADO" ? "Iniciado" : projeto.status === "EM_ANDAMENTO" ? "Em Progresso" : "Concluído"}</span>
              </div>

              <p style={{ fontSize: "30px" }}>{projeto.descricao}</p>

              { parseInt(userId) === projeto.alunoId ? <button className='btnLinkedin'>Compartilhar projeto no LinkedIn</button> : "" }
              { parseInt(userId) === projeto.alunoId ? <button className='btnExcluir'>Excluir projeto</button> : "" }
              { userPerfil === 'empresa' ? <button className='btnFavoritarProjeto'>Favoritar Projeto</button> : "" }

            </div>

            
        </div>
        <Footer />
    </>
  )
}

export default ProjectDetails