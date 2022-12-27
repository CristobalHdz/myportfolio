import "./CardComponent.css";

const CardComponent = (props) => {
  return (
    <div className="card cardstyle m-3">
      <div className="card-body">
        <div className="card-header">
          {props.header} <hr />
        </div>
        <div className="card-info">{props.children}</div>
      </div>
    </div>
  );
};

export default CardComponent;
