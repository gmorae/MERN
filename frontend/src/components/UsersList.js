import React, { Component } from 'react'
import axios from 'axios'
export default class UsersList extends Component {

    state = {
        users: [],
        nome: ''
    }


    //Serve para pedir os dados para a API
    async componentDidMount() {
        const res = await axios.get('http://localhost:12345/api/users')
        this.setState({ users: res.data })
        console.log(this.state.users)
    }

    onChangeUserName = (e) => {
        this.setState({
          nome: e.target.value    
        })
    }

    // Metodo que cancela p envio
    onSubmit = async e => {
        
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <h3>Create New User</h3>
                            <form onSubmit={this.onSubmit}>
                                <div className="from-group">
                                    <input type="text" className="form-control" onChange={this.onChangeUserName} />
                                </div>
                                <button type="submit" className="btn btn-primary">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ul className="list-group">
                            {
                                this.state.users.map(user =>
                                    <li className="list-group-item list-group-item-action" key={user.id_programadores}>
                                        {user.nome}
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
