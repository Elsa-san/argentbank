const Benefit = ({ title, content, image }) => {
  return (
    <div className="feature-item">
      <img src={image} alt={image} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Benefit;