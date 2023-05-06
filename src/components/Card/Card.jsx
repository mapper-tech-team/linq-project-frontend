import React, { Component } from 'react'
import './Card.css'
import ProjetoService from '../../services/ProjetoService'

class Card extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            projetos: []
        }
    }

    componentDidMount() {
        ProjetoService.getProjetos().then((res) => {
            this.setState({ projetos: res.data });
        });
    }

    render() {
        return (
            <div className="cards">
                { this.state.projetos.map(
                    projeto => 
                    <div className='card-container'>
                        <div className='image-container'>
                            <img 
                                src={projeto.foto !== null ? projeto.foto : "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg"} 
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
                                <a href='https://facens.br/'>
                                    Ver mais
                                </a>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
            )
        }
    }

export default Card