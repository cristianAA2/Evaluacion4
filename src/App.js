import Galeria from "./Galeria"

const imagenes = [
    { nombre:"Bain", comentario:"Bain es uno de los personajes mas importantes de Payday, es el verdadero jefe del equipo de Payday y titiritero detrás de todos los planes de la banda. Es un personaje misterioso al que nadie ha visto en persona, prácticamente un fantasma que opera desde las sombras con una lista de contactos y variedad de recursos. Al mismo tiempo es el dueño de Crime.net, la pagina de su organización criminal en Payday 2 por la que podemos acceder a diferentes contratos para realizar. ", url:"img/bain.png" },

    { nombre:"Dallas", comentario:"Nathan Steele, o Dallas es un personaje jugable dentro de la saga de videojuegos Payday. Siendo este el líder de la Payday Gang, su especialización es la rama de habilidades Mente Maestra.", url:"img/dallas.png" },

    { nombre:"Hoxton", comentario:"Hoxton es el nombre en clave utilizado por James Hoxworth, el Fugitivo (antiguo Francotirador) de Sheffield, South Yorkshire, Inglaterra, Reino Unido. Tiene dos hermanos, posiblemente más. Lleva una máscara de payaso rosa y blanco.", url:"img/hoxton.png" },

    { nombre:"Wolf", comentario:"Wolf es un técnico de Suecia y un personaje jugable dentro de la saga de videojuegos Payday. Lleva la máscara de demonio blanca y roja, y Ulf Andersson le da voz.", url:"img/wolf.png" },

    { nombre:"Chains", comentario:"Chains, también conocido como Nicolas, es un personaje jugable. Un veterano militar de 10 años, usa una máscara blanca, azul y rosa, y Howard Thompson le da voz. En PAYDAY 2, Chains tiene 37 años.", url:"img/chains.png" },

    { nombre:"Houston", comentario:"Houston es un personaje jugable de PAYDAY 2. Es un estadounidense de 31 años, Tras el arresto de Hoxton, Houston asumió su lugar en la banda, tomando su alias y máscara. posterior al lanzamiento del atraco de 'La fuga de Hoxton', Hoxton recuperó su nombre, pero le permitió a Houston conservar su antigua máscara.", url:"img/houston.png" }
];

const imagenItems = imagenes.map( imagen => 
    <Galeria nombre={imagen.nombre} comentario={imagen.comentario} url={imagen.url} alt={imagen.nombre}></Galeria>
);

function App(){
    return(
        <div className="container mt-5">
            <div className='row row-cols-1 row-cols-3'>
                {imagenItems}
            </div>
        </div>
    );
}

export default App;