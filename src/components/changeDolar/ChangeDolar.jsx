import './ChangeDolar.css';
import {Form, Button} from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

const ChangeDolar = ({changePriceDolar}) => {
  const [enteredPrice, setEnteredPrice] = useState(0);

  const changePriceHandler = (event) => {
    setEnteredPrice(event.target.value);
};

const submitPriceHandler = (event) => {
  event.preventDefault();

  const priceDolar = enteredPrice;

  changePriceDolar(priceDolar)
  setEnteredPrice(0);
}

const [showForm, setShowForm] = useState(false);

const handleClick = () => {
  setShowForm(!showForm); 
}

  return (
    <div>
      <Button className = "button-mostrar" onClick={handleClick}> 
        {showForm ? "Esconder" : "Modificar precio dólar"} 
      </Button>
      {showForm && (
      <Form onSubmit={submitPriceHandler}>
      <Form.Group className="mb-3">
        <Form.Label className= "small-label">Precio del dólar:</Form.Label>
        <Form.Control 
        type="number" 
        className="small-input" 
        placeholder="Ingrese el precio del dólar para actualizar"
        onChange = {changePriceHandler}
        value={enteredPrice}
        />
        <Button variant="primary" type="submit" className="button">Enviar</Button>
      </Form.Group>
      </Form>
      )}
    </div>
  )
}

ChangeDolar.propTypes = {
  changePriceDolar: PropTypes.func.isRequired,
};

export default ChangeDolar
