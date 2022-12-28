import "./ImageCard.css";

const ImageCard = (props) => {
  return (
    <div className="card-container">
      <div className="product-card">
        <div className="img-container">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="product-info">
          <h2>{props.name}</h2>
          <a href={props.webpage} target="_blank">
            Webpage
          </a>
          {props.repository && (
            <a href={props.repository} target="_blank">
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
