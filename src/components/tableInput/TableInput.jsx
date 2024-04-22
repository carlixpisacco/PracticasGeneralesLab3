import { Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from "prop-types";

const TableInput = ({valorInput}) => {
    const [numDePatas, setNumDePatas] = useState("");

    const handleChange = (event) => {
        setNumDePatas (event.target.value);
    }

    const submitEnviar = (event) => {
        event.preventDefault();
        valorInput (numDePatas);
        setNumDePatas("");
    }

  return (
    <div>
      <Form onSubmit={submitEnviar}>
        <Form.Group className="mb-3">
          <Form.Control 
          type="number" 
          placeholder="ingrese el número de patas" 
          value = {numDePatas}
          min = "0"
          onChange = {handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">Enviar</Button>
      </Form>
    </div>
  )
}

TableInput.propTypes = {
    valorInput: PropTypes.func.isRequired,
};


export default TableInput
