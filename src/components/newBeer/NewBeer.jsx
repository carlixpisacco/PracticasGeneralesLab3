import './NewBeer.css';
import PropTypes from "prop-types";
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

const NewBeer = ({ addNewBeer }) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredStyle, setEnteredStyle] = useState("");
    const [enteredPrice, setEnteredPrice] = useState(0);
    const [enteredAvailable, setEnteredAvailable] = useState(true);

    const changeNameHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const changeStyleHandler = (event) => {
        setEnteredStyle(event.target.value);
    };

    const changePriceHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const changeAvailableHandler = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'Disponible') {
            setEnteredAvailable(true);
        } else {
            setEnteredAvailable(false);
        }
    };

    const submitBeerHandler = (event) => {
        event.preventDefault();

        const newBeer = {
            beerName: enteredName,
            beerStyle: enteredStyle,
            price: enteredPrice,
            available: enteredAvailable,
        }

        addNewBeer(newBeer)
        setEnteredName("");
        setEnteredStyle("");
        setEnteredPrice(0);
        setEnteredAvailable(true);
    }

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    }

    return (
        <div className="formulario">
            <Button className="button-mostrar" onClick={handleClick}>
                {showForm ? "Esconder" : "Agregar nueva cerveza"}
            </Button>
            {showForm && (
            <Card className="w-50">
                <Card.Body>
                    <Form className="text-white" onSubmit={submitBeerHandler}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerName">
                                    <Form.Label className="form-label">Nombre:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar nombre"
                                        onChange={changeNameHandler}
                                        value={enteredName}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerStyle">
                                    <Form.Label className="form-label">Estilo:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingresar estilo"
                                        onChange={changeStyleHandler}
                                        value={enteredStyle}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerPrice">
                                    <Form.Label className="form-label">Precio:</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Ingresar precio"
                                        min={1}
                                        onChange={changePriceHandler}
                                        value={enteredPrice}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="beerAvailable">
                                    <Form.Label className="form-label">Disponibilidad:</Form.Label>
                                    <Form.Control as="select"
                                        onChange={changeAvailableHandler}
                                        value={enteredAvailable}
                                    >
                                        <option>Disponible</option>
                                        <option>No disponible</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-end">
                            <Col md={3} className="d-flex justify-content-end">
                                <Button className="button-form" type="submit">
                                    Agregar cerveza
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            )}
        </div>
    )
}

NewBeer.propTypes = {
    addNewBeer: PropTypes.func.isRequired,
};


export default NewBeer
