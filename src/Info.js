function Info(props) {
    return (
        <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
            <p className="card-text">{props.comentario}</p>
        </div>
    );    
}

export default Info;