import PropTypes from "prop-types";

const StyleBeers = ({birras}) => {

    const uniqueStyles = birras
        .map(beer => beer.beerStyle)
        .filter((style, index, self) => self.indexOf(style) === index); //Dentro de la función de callback, estamos comparando el índice actual del elemento (index) con el índice de su primera aparición en el arreglo (self.indexOf(style)). Si estos índices son iguales, significa que el elemento es único y debe ser mantenido en el resultado del filtrado. Si no son iguales, significa que el elemento ya ha aparecido antes en el arreglo y debe ser descartado. Por lo tanto, self.indexOf(style) === index se asegura de que solo se mantengan los elementos que son únicos en el arreglo.
        console.log(uniqueStyles)
  return (
    <div>
      <h2>Estilos de Cerveza:</h2>
      {uniqueStyles.map((style, index) => (
                    <p key={index}>{style}</p>
                ))}
    </div>
  )
}

StyleBeers.propTypes = {
    birras: PropTypes.array,
};

export default StyleBeers

