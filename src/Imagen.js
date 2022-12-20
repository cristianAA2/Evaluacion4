function Imagen(props){
    return (
        <img className="card-img-top" src={props.url} alt={props.alt}></img>
    );
}

export default Imagen;