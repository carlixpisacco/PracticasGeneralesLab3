import PropTypes from "prop-types";
import './Beers.css';
import {Card, ListGroup} from "react-bootstrap";



const Beers = ({precio, beers}) => {
    return (
        <div className='contenedor'>
            {beers.map((beer) => (
                <div className="card" key={beer.id}>
                    <Card style={{ width: '20rem', backgroundColor: "#3c357b" }}>
                        <Card.Header style={{ color: 'white' }}>{beer.beerName}</Card.Header>
                        <ListGroup variant="flush" >
                            <ListGroup.Item style={{ backgroundColor: "#a7a2d7" }}>Estilo: {beer.beerStyle}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#a7a2d7" }}>Precio: ${precio !== undefined && precio !== 0 ? beer.price * precio : beer.price}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#a7a2d7" }}>{beer.available ? 'Disponible' : 'No disponible'}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            ))}
        </div>
    )

};

Beers.propTypes = {
    precio:PropTypes.number,
    beers: PropTypes.array,
};


export default Beers