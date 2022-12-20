import Imagen from "./Imagen";
import Info from "./Info";
import './Galeria.css';

function Galeria(props) {
    return (
        <div className="col">
            <div className="card">
                <Imagen url={props.url} alt={props.alt}/>
                <Info nombre={props.nombre} comentario={props.comentario} />
            </div>
        </div>
    );
}

export default Galeria;