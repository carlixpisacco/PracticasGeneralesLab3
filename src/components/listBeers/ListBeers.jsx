import './ListBeers.css'
import PropTypes from "prop-types";

const ListBeers = ({ birras }) => {
    let valorDolar = 1000
    return (
        <div>
            {birras.map((beer) => (
                <div key={beer.id}>
                        <p>Nombre: {beer.beerName}</p>
                        <p>Estilo: {beer.beerStyle}</p>
                        <p>Precio: ${beer.price * valorDolar}</p>
                        <p>Disponibilidad: {beer.available ? "Disponible" : "No disponible"}</p>
                </div>
            ))}

        </div>
    )
}

ListBeers.propTypes = {
    birras: PropTypes.array,
};

export default ListBeers