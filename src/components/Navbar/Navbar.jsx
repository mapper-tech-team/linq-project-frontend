import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <header>
            <Link to="/" className='logo'><i class='logo-icon'></i><span>Lin<span className='qp'>QP</span>roject</span></Link>

            <ul className='navbar'>
                <li><Link to="/" className='active'>Projetos</Link></li>
                <li><Link to="/">Cadastrar Projeto</Link></li>
                <li><Link to="/">Sobre o LinQProject</Link></li>
                <li><Link to="/">Meus Projetos</Link></li>
            </ul>

            <ul className='main'>
                <li><Link to="/signin" className='user'><i className='signin-logo'></i>Fazer login</Link></li>
                <li><Link to="/signup">Criar conta</Link></li>
                <div className='bx bx-menu' id='menu-icon'></div>
            </ul>
        </header>
    </div>
  )
}

export default Navbar