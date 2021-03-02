import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';

class App extends Component {

    render(){
        return (
            <div className='app'>
                <div className='search'>
                    <input type="search" placeholder='Digite o nome do usuário no github'/>

                </div>
                <div className="user-info">
                    <img className='profile-pic' src="https://avatars.githubusercontent.com/u/60948283?v=4"/>
                    <h2><a href="https://github.com/marcosfsalazar">MarcosFSalazar</a></h2>
                    <ul className='repos-info'>
                        <li>Repositórios: 17</li>
                        <li>Seguidores: 0</li>
                        <li>Seguindo: 1</li>
                    </ul>

                </div>
                
                    <div className="actions">
                        <button>Ver Repositórios</button>
                        <button>Ver Favoritos</button>
                    </div>

                    <div>
                        <h2>Repositórios: </h2>
                        <ul className='repos'>
                            <li><a href='#'>Nome do repositório</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Favoritos: </h2>
                        <ul className='starred'>
                            <li><a href='#'>Nome do repositório</a></li>
                        </ul>
                    </div>
            </div>
        )    
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))