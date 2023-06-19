import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../Api/api';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './style.css';
import Whatsapp from '../../assets/whatsapp.png'
import Email from '../../assets/o-email (1).png'
import Projeto from '../../assets/projeto.jpeg'
import Projeto2 from '../../assets/projeto2.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import { green } from '@mui/material/colors';

const ProjectDetails = () => {

    const [projeto, setProjeto] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const userId = localStorage.getItem("user_id");
    const userPerfil = localStorage.getItem("user_perfil");
    const userEmail = localStorage.getItem("user_email");
    const shareUrl = 'http://localhost:3000/projectDetails/' + params.id; 
    const shareTitle = 'Projeto ' + projeto.nome; 
    const shareSummary = 'Confira o meu novo projeto cadastrado na plataforma LinQProject!';

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

    const handleExcluirProjeto = async () => {

        const userToken = localStorage.getItem("user_token");

        const config = {
            headers: {
              'Authorization': 'Bearer ' + userToken
            }
        }

        await api.delete('/projeto/deletar/' + projeto.id, config).then(() => {
            alert("Projeto deletado com sucesso!");
            navigate("/home");
        })

    }

    const handleLikeProject = async () => {

        const userToken = localStorage.getItem("user_token");

        const config = {
            headers: {
              'Authorization': 'Bearer ' + userToken
            }
        }

        const { data } = await api.get('/aluno/obter/' + projeto.alunoId, config)

        const emailPayload = {
            "toEmail": data.email,
            "subject": "Nova curtida em seu projeto!",
            "body": `Parabéns! A empresa ${userEmail.split("@")[0]} visitou o seu projeto ${projeto.nome} e se interessou por ele!`
        }

        await api.post('/email/send', emailPayload).then(() => {
            alert("Notificação para o dono do projeto enviada com sucesso!");
        })
    }

    const handleBaixarDocumento = async () => {
        // await api.get('/download/' + projeto.documentacao)
    }

  return (
    <>
        <Navbar />
        {/* <div class="container1">
        <div class="NameProject">Nome do projeto - Categoria</div>
        <section id="main-text">
            <div class="Title">Descrição do projeto</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ipsam adipisci accusamus nesciunt ipsum quam,
                quas aspernatur quisquam possimus eligendi, veniam dolorem ea labore ad quos doloribus unde quibusdam.
                Eligendi.</div>
        </section>
    </div>
  

    <div class="infos">
        <div class="docs">
            <p>docs</p>
            <img class="imgContacts" src="./assets/formato-de-arquivo-doc.pn" alt=""/>
            <img  class="imgContacts"src="./assets/csv.png" alt=""/>
        </div>
        <div class="contact">
<p>Contatos</p>
<img class="imgContacts" src={Whatsapp} alt=""/>
<img  class="imgContacts"src={Email} alt=""/>
        </div>

    </div>

    <div class="images">
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item" >
                    <img src={Projeto} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" >
                    <img src={Projeto2} class="w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={Projeto2} class="w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div> */}
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
              { projeto.linkedin ? <p>LINKEDIN: <Link to={projeto.linkedin} target='_blank'>{projeto.linkedin}</Link></p> : "" }
              { projeto.github ? <p>GITHUB: <Link to={projeto.github} target='_blank'>{projeto.github}</Link></p> : "" }
              { projeto.documentacao ? <p>DOCUMENTO: {projeto.documentacao} <a className='buttonLink' href={`http://localhost:8080/file/download/${projeto.documentacao}`}><button className='btnBaixar'>Baixar Documento</button></a></p> : "" }

              { parseInt(userId) === projeto.alunoId ? <button className='btnLinkedin'>Compartilhar link do projeto</button> : "" }
              { parseInt(userId) === projeto.alunoId ? <button className='btnExcluir' onClick={handleExcluirProjeto}>Excluir projeto</button> : "" }
              { userPerfil === 'empresa' ? <button className='btnFavoritarProjeto' onClick={handleLikeProject}>Curtir projeto</button> : "" }

            </div>

            
        </div>
        <Footer />
    </>
  )
}

export default ProjectDetails