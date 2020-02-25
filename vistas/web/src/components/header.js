
import React from 'react';
import { Link } from "react-router-dom";

const Imagen = require('../assets/logoMini.png');


const Header = () => (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div>
            <img className=" h-620" height="500" width="500" src={Imagen} alt="Cargando" />
        </div>
        <br></br> <br></br>
        <div className="items-center">
            <p className="font-black text-2xl">
                <i className=" fab fa-accessible-icon" />
                Películas
                        </p>
            <br></br>
            <ul>
                <Link to="/add_movie">
                    <li className="font-black">
                        <i className="fas fa-angle-right"></i>
                        Crear Película
                                </li>
                </Link>


                <Link to="/movies">
                    <li className="font-black">
                        <i className="fas fa-angle-right"></i>
                        Catálogo
                                </li>
                </Link>
            </ul>
            <br></br>
            <p className="font-black text-2xl">
                <i className="fab fa-accessible-icon"></i>
                Crear
            </p>
            <ul>
                <Link to="/rooms">
                    <li className="font-black">
                        <i className="fas fa-angle-right"></i>
                        Crear Salas
                                </li>
                </Link>

                <Link to="/schedules">
                    <li className="font-black">
                        <i className="fas fa-angle-right"></i>
                        Crear Horarios
                                </li>
                </Link>
            </ul>
            <br></br>
            <p className="font-black text-2xl">
                <i className="fab fa-accessible-icon"></i>
                Asignar
            </p>
            <ul>
                <Link to="/films_room">
                    <div class="font-black">
                        
                            <i className="fas fa-angle-right"></i>
                            Asignar Peliculas
                        
                    </div>
                </Link>
            </ul>
            <br></br> <br></br> 
            <ul>
                <Link to="/">
                    <button className="bg-red-500 hover:bg-blue-400 text-black font-bold py-2 px-4 border-b-6 border-blue-700 hover:border-blue-500 rounded">
                        Salir
                    </button>
                </Link>

            </ul>
        </div>
    </nav>)

export default Header;