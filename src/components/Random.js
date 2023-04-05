export const Random = (props) => {
  const { min, max } = props;

  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  return <div>{randomNum}</div>;
};
