export const BoxColor = (props) => {
  const { r, g, b } = props;

  const color = `rgb(${r}, ${g}, ${b})`;

  const style = {
    backgroundColor: color,
  };

  return <div style={style}>{color}</div>;
};
