export const IdCard = (props) => {
  const birthDate = new Date(props.birth).toLocaleDateString();
  const heightInMeters = (props.height / 100).toFixed(2) + 'm';
  return (
    <>
      <p>
        {' '}
        <b> First Name:</b> {props.firstName}
      </p>
      <p>
        {' '}
        <b> Last Name:</b> {props.lastName}
      </p>
      <p>
        {' '}
        <b> Gender:</b> {props.gender}
      </p>
      <p>
        {' '}
        <b> Height:</b> {heightInMeters}
      </p>
      <p>
        {' '}
        <b> Date of Birth:</b> {birthDate}
      </p>
      {<img src={props.picture} alt={props.firstName} />}
    </>
  );
};
