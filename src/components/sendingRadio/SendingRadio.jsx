import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import PropTypes from "prop-types";

const SendingRadio = ({valorRadio}) => {

    const [options, setOptions] = useState("");


    const handleOptionChange = (event) => {
        setOptions(event.target.value);
        console.log(options)
    }

    const submitEnviar = (event) => {
        event.preventDefault();
        valorRadio(options);
        setOptions("");
        event.target.reset(); //desmarca los input
    }

    return (
        <div>
            <Form onSubmit={submitEnviar}>
                    <Form.Check
                        name="radioOptions"
                        type="radio"
                        label="Retiro en el local"
                        onChange = {handleOptionChange}
                        value="local"
                    />
                    <Form.Check
                        name="radioOptions"
                        type="radio"
                        label="Envío express"
                        onChange = {handleOptionChange}
                        value="express"
                        
                    />
                    <Form.Check
                         name="radioOptions"
                        type="radio"
                        label="Envío común"
                        onChange = {handleOptionChange}
                        value="comun"
                    />
                 <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </div>

    )
}

SendingRadio.propTypes = {
    valorRadio: PropTypes.func.isRequired,
};



export default SendingRadio
