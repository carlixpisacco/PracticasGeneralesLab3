import PropTypes from "prop-types";

const FamilyMember = ({members}) => {
  return (
    <div>
      {members.map((member, i) => (
        <div key={i}>
          <h3>{member.name}</h3>
          <p>Edad: {member.age}</p>
        </div>
      ))}
    </div>
  )
}

FamilyMember.propTypes = {
    members: PropTypes.array,
  };

export default FamilyMember
