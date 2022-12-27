import "./CardContainer.css";

const CardContainer = (props) => {
  return (
    <div className="cardcontainer">
      <div className="cardcontainer_header text-center">{props.title}</div>
      <div className="cardcontainer_cardStyle">{props.children}</div>
    </div>
  );
};

export default CardContainer;
