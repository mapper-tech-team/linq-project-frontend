import React from 'react'
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {

  const { signout } = useAuth();
  const navigate = useNavigate();

  const userHasToken = localStorage.getItem("user_token");
  const userPerfil = localStorage.getItem("user_perfil");

  const handleLogout = () => {
    signout();
    navigate("/signin");
  }

  return (
    <div>
        <header>
            <Link to="/home" className='logo'><i className='logo-icon'></i><span>Lin<span className='qp'>QP</span>roject</span></Link>

            { userPerfil === 'empresa' ? 
                <ul className='navbar'>
                    <li><Link to="/home">Projetos</Link></li>
                    <li><Link to="/about">Sobre o LinQProject</Link></li>
                </ul> : 
                <ul className='navbar'>
                  <li><Link to="/home">Projetos</Link></li>
                  <li><Link to="/createProject">Cadastrar Projeto</Link></li>
                  <li><Link to="/myProjects">Meus Projetos</Link></li>
                  <li><Link to="/about">Sobre o LinQProject</Link></li>
                </ul>
            }

            <ul className='main'>
                <li className={` ${userHasToken ? "hideOption" : ""} `}><Link to="/signin" className='user'><i className='signin-logo'></i>Fazer login</Link></li>
                <li className={` ${userHasToken ? "hideOption" : ""} `}><Link to="/signup">Criar conta</Link></li>
                <li className={` ${!userHasToken ? "hideOption" : ""} `} onClick={handleLogout}><Link><AiOutlineLogout /></Link></li>
                <div className='bx bx-menu' id='menu-icon'></div>
            </ul>
        </header>
    </div>
  )
}

export default Navbar