const FeatureModel = ({ image, title, text }) => {
  return (
    <div className="flex justify-start items-center mb-2  lg:w-[470px]  p-3 gap-10 hover:bg-[linear-gradient(125deg,#272727_0%,#11101D_100%)] hover:cursor-pointer rounded-lg">
      <div className=" bg-dimBlue p-3 rounded-[50%] w-fit felx justify-center items-center mb-2 ">
        <img src={image} alt="image" />
      </div>
      <div className=" gap-5">
        <h1 className="featureModel-heading">{title}</h1>
        <p className="featureModel-txt">{text}</p>
      </div>
    </div>
  );
};

export default FeatureModel;
