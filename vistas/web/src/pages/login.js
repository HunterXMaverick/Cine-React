import React, { Component } from 'react';
import axios from 'axios';

const API_LOGIN = "http://localhost:5000/film/login";
const Inicio = require('../assets/logoCine.png');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginAccess = e => {
    e.preventDefault()
    if (this.state.correo === "" || this.state.clave === "") {
      alert("Llenar Datos");
    } else {
      axios.post(API_LOGIN, this.state)
        .then(response => {
          if (response.data.mensaje === "found") {
            window.location.assign("http://localhost:3000/home");
          }
        })
        .catch(error => {
          alert("Datos Incorrectos")
        })
    }
  };


  render() {
    const { correo, clave } = this.state
    return (
      <div className="container mx-auto">
        <div className="flex justify-center px-12 my-12">
          <div className="w-full xl:w-3/4 xl:w-11/12 flex">
            <img className="h-700 mx:w-30 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              src={Inicio}
              alt="Cargando" />
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h1 className="pt-8 text-2xl text-center">Bienvenido</h1>
              <form onSubmit={this.loginAccess} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Usuario
                </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Usuario"
                    name="correo"
                    value={correo}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Contraseña
                </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-black-700 border border-black-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="*********"
                    name="clave"
                    value={clave}
                    onChange={this.changeHandler}
                  />
                  <p className="text-xs  text-black-500">Ingresar Datos</p>
                </div>
                <div className="mb-6 text-center">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-black font-bold py-5 px-5 border-b-5 border-blue-700 hover:border-blue-500 rounded">
                    Entrar
                </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a href="http://localhost:3000/register" className="bg-red-500 hover:bg-blue-400 text-black font-bold py-5 px-5 border-b-5 border-blue-700 hover:border-white-500 rounded">
                    Registrate
                </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
