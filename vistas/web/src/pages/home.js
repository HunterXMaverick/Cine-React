import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';

const teatro = require('../assets/pantallaPrincipal.png');

const Home = () => {
    return (
        <div>
            <Sidebar />,
        <Header />,
        <div className="ml-64">
                <hr />
                <main className="my-8">
                    <div className=" mx-auto w-full lg:flex justify-center" >
                        <img className=" h-60" height="1000" width="900"
                            src={teatro} alt="Cargando" />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Home;