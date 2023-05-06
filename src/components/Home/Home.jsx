import React, { Component } from 'react'
import './Home.css';
import Card from '../Card/Card';

class Home extends Component {
  render() {
    return (
        <div className="container">
            <h1>Projetos</h1>
            <Card />
        </div>
    )
  }
}
 export default Home;