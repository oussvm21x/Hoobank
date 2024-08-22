const Model = ({ title, text }) => {
  return (
    <div>
      <div className=" mb-6 lg:mb-10">
        <h1 className="model mb-6 lg:mb-10">{title}</h1>
        <p className="model-text">{text}</p>
      </div>
    </div>
  );
};

export default Model;
