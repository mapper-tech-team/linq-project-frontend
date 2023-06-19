import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ projetos }) => {
    return (
        <div className="cards">
            { projetos.map(
                projeto => 
                <div className='card-container' key={projeto.id}>
                    <div className='image-container'>
                        <img 
                            src={projeto.foto !== "" && projeto.foto !== null ? projeto.foto : "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"} 
                            alt='Imagem do Projeto' />
                    </div>
                    <div className='card-content'>
                        <div className='card-title'>
                            <h3>{projeto.nome}</h3>
                        </div>
                        <div className='card-body'>
                            <p>{projeto.descricao}</p>
                        </div>
                    </div>
                    <div className='btn'>
                        <button>
                            <Link className='btnVerMais' to={`/projectDetails/${projeto.id}`}>
                                Ver mais
                            </Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card