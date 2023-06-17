import React from 'react'
import "./Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { AiOutlineLogout } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

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
      
        <header className='d-inline-flex'>
        <nav class="navbar">
  
    <div class="navbar-brand" >
    <Link to="/home" className='logo'><i className='logo-icon'></i><span>Lin<span className='qp'>QP</span>roject</span></Link>
    </div>
  <ul class="nav nav-underline">
  <li class="nav-item">
  <Link  class="nav-link" aria-current="page"  to="/home">Projetos</Link>
  </li>
  <li class="nav-item">
  <Link  class="nav-link" to="/createProject">Cadastrar Projeto</Link>
  </li>
  <li class="nav-item">
  <Link  class="nav-link" to="/myProjects">Meus Projetos</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" to="/about">Sobre o LinQProject</Link>
  </li>
</ul>
<ul className='main'>
                <li className={` ${userHasToken ? "hideOption" : ""} `}>
                  <div className='login'><Link to="/signin" className='user'>Fazer login</Link></div></li>
                  <li className={` ${userHasToken ? "hideOption" : ""} `}><div className='login'><Link to="/signup">Criar conta</Link></div></li>
                <li className={` ${!userHasToken ? "hideOption" : ""} `} onClick={handleLogout}><Link><AiOutlineLogout /></Link></li>
                <div className='bx bx-menu' id='menu-icon'></div>
            </ul>
  
</nav>
            {/* <Link to="/home" className='logo'><i className='logo-icon'></i><span>Lin<span className='qp'>QP</span>roject</span></Link> */}

            {/* { userPerfil === 'empresa' ? 
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
            } */}

          
            {/* <MdMenu className='menu'size={50} />  */}
        </header>
    </div>
  )
}

export default Navbar