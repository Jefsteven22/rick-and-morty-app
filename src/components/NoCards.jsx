import './styles/Error.css'


const NoCards = () => {
  return (
    <div className="alert">
      <label>
        <input type="checkbox" className="alertCheckbox" autocomplete="off" />
        <div className="alert error">
          <span className="alertClose">X</span>
          <span className="alertText">
            <h1>Attention</h1>
            No population 😢
            <br className="clear" />
          </span>
        </div>
      </label>
    </div>
  );
};

export default NoCards;