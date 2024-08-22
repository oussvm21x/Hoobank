const CTA = () => {
  return (
    <div className="gen-pad mb-10 ">
      <div className="flex justify-between items-start xl:items-center flex-col xl:flex-row hover:bg-[linear-gradient(125deg,#272727_0%,#11101D_100%)] hover:cursor-pointer rounded-xl pr-20">
        <div className="mb-6">
          <h1 className="review-header mb-6">Let’s try our service now!</h1>
          <p className="review-text">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className="btn-text">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
