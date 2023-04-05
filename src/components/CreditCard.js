export const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const hiddenNumber = '•••• •••• •••• ' + number.slice(-4);

  const formattedMonth = ('0' + expirationMonth).slice(-2);

  const formattedYear = expirationYear.toString().slice(-2);

  const style = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '15%',
    margin: 'auto',
  };

  const logoStyle = {
    marginBottom: '20px',
    marginLeft: 'auto',
  };

  const numberStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const dateStyle = {
    marginRight: '10px',
  };

  return (
    <div style={style}>
      <div style={logoStyle}>
        {type === 'Visa' ? (
          <img src="/img/visa.png" alt="Visa" width="50" />
        ) : (
          <img src="/img/master-card.svg" alt="Master Card" width="50" />
        )}
      </div>
      <div style={numberStyle}>{hiddenNumber}</div>
      <div style={{ display: 'flex' }}>
        <div style={dateStyle}>
          Expires {formattedMonth}/{formattedYear}
        </div>
        <div>{bank}</div>
      </div>
      <div>{owner}</div>
    </div>
  );
};
