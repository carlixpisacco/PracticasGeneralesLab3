import PropTypes from "prop-types";

const Person = ({names}) => {
    const namesConP = names.filter(name => name.startsWith('P'));
  return (
    <div>
        <h3>Nombres con P:</h3>
        {namesConP.map((name, i) => (
        <div key={i}>
          <p key = {i}>{name}</p>
          </div>
      ))}
    </div>
  )
}

Person.propTypes = {
    names: PropTypes.array,
  };

export default Person
