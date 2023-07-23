import './styles/Error.css'


const Error = () => {
  return (
    <div className="alert">
      <label>
        <input type="checkbox" className="alertCheckbox" autocomplete="off" />
        <div className="alert error">
          <span className="alertClose">X</span>
          <span className="alertText">
            <h1>Error</h1>
            Hey! You must provide an id from 1 to 126. Try again 😢
            <br className="clear" />
          </span>
        </div>
      </label>
    </div>
  );
};

export default Error;
