const SingleProductCard = ({ title, img, price, description }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{price}</h5>

        <p className="card-text">{description.substring(0, 50)}</p>
      </div>
    </div>
  );
};

export default SingleProductCard;