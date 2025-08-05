import "./TrainingPartners.css";

const TrainingPartners = ({ heading , images = [] }) => {
  const imageList = images.length > 0 ? [...images, ...images] : [];

  return (
    <div className="marquee-container">
      <h2 className="section-heading">{heading}</h2>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {imageList.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index}`}
              className="marquee-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPartners;