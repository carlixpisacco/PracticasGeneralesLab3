import PropTypes from "prop-types";
import './AvailableBeers.css';

const AvailableBeers = ({ name,available }) => {
    if (available === true) {
        return (
            <div>
                <p> {name} </p>
            </div>
        )
    }
    else{
        return null;  
    }
}

AvailableBeers.propTypes = {
    name: PropTypes.string,
    available:PropTypes.bool,
};

export default AvailableBeers