import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Card  from '../../components/Card/Card';
import api from '../../Api/api';

const MyProjects = () => {

  const [projetos, setProjetos] = useState([]);

  useEffect(() => {

    const userId = localStorage.getItem("user_id");
    const userToken = localStorage.getItem("user_token");

    (async () => {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + userToken
        }
      }
      const { data } = await api.get('/projeto/obter/aluno/' + userId, config);
      setProjetos(data);
    })();

  }, []);

  return (
    <>
      <Navbar />
        <div className='container'>
            <h1>Meus Projetos</h1>
            {
             projetos.length <= 0 ? <h1>Você não possui projetos cadastrados</h1> :    
             <Card projetos={projetos} />    
            }
            
        </div>
      <Footer />
    </>
  )
}

export default MyProjects