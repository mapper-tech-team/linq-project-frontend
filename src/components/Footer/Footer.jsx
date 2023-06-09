import React from 'react'
import "./Footer.css";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>Deixe seu feedback!</h4>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScCioo7xKQ6VVHn262BhHJXdFYS53KNDmoxZY4zuxwJL5FftQ/viewform?usp=sf_link" target='_blank'>    
                        <p>Acessar formulário</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Tutorial da plataforma</h4>
                    <a href="/resource">
                        <p>Documentação do LinQProject</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Parcerias</h4>
                    <a href="https://facens.br/" target='_blank'>
                        <p>Facens</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>LinQProject</h4>
                    <a href="https://www.figma.com/file/ZF9MwCrlcA1fMHQiM9FF0r/LinQ-Project?type=design&node-id=0-1" target='_blank'>
                        <p>Protótipo do projeto</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Redes Sociais da Mapper Tech</h4>
                    <div className='socialmedia'>
                        <Link to="https://www.facebook.com/Mapper-Tech-101289479682141/" target='_blank'><p><img src={fb} alt="" /></p></Link>
                        <Link to="https://twitter.com/mapper_tech" target='_blank'><p><img src={twitter} alt="" /></p></Link>
                        <Link to="https://www.linkedin.com/in/mapper-tech-47757b27b/" target='_blank'><p><img src={linkedin} alt="" /></p></Link>
                        <Link to="https://www.instagram.com/mapper.tech/" target='_blank'><p><img src={instagram} alt="" /></p></Link>
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