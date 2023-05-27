import React from 'react'
import "./Footer.css";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>Deixe seu feedback!</h4>
                    <a href="/employer">    
                        <p>Acessar formulário</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Recursos</h4>
                    <a href="/resource">
                        <p>Documentação do LinQProject</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Parcerias</h4>
                    <a href="/employer">
                        <p>Facens</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>MapperTech</h4>
                    <a href="/about">
                        <p>Sobre a equipe</p>
                    </a>
                    <a href="/contact">
                        <p>Contatos</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Em breve...</h4>
                    <div className='socialmedia'>
                        <p><img src={fb} alt="" /></p>
                        <p><img src={twitter} alt="" /></p>
                        <p><img src={linkedin} alt="" /></p>
                        <p><img src={instagram} alt="" /></p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} MapperTech. Todos os Direitos Reservados.
                    </p>
                </div>
                <div className='sb__footer-below-links'>
                    <a href='/terms'><div><p>Termos e Condições</p></div></a>
                    <a href='/privacy'><div><p>Privacidade</p></div></a>
                    <a href='/security'><div><p>Segurança</p></div></a>
                    <a href='/cookie'><div><p>Declaração de Cookies</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer