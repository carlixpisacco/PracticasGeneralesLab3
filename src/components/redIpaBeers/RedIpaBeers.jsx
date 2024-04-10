import './RedIpaBeers.css';
import PropTypes from "prop-types";

const RedIpaBeers = ({birras}) => {
  const redBeers = birras.filter(beer => beer.beerStyle === 'Red');
  const ipaBeers = birras.filter(beer => beer.beerStyle === 'IPA');
  const redBeersCount = redBeers.length;
  const ipaBeersCount = ipaBeers.length;

  return (
    <div>
      <h1>Cantidad de cervezas de estilo Red e IPA:</h1>
            <p>Cantidad de Red:{redBeersCount}</p>
            <p>Cantidad de IPA:{ipaBeersCount}</p>
    </div>
  )
}

RedIpaBeers.propTypes = {
    birras: PropTypes.array,
};

export default RedIpaBeers
