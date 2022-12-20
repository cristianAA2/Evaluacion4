import React from 'react';
import ReactDOM from 'react-dom/client';
import Encabezado from './Encabezado';
import Texto from './Texto';
import Formulario from './formulario';
import Footer from './Footer';
import App from './App';
import "./index.css"


const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className='container mt-5 d-flex flex-column justify-content-center w-100 h-100"'>
    <Encabezado></Encabezado>
    <div>
        <Texto></Texto>
        <App></App>
        <Formulario></Formulario>
    </div>
    <Footer></Footer>
</div>

);
