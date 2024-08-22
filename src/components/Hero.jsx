import { arrowUp, discount, robot } from "../assets";
import { Arrow } from "../containers";

const Hero = () => {
  return (
    <div className="mainHero ">
      <div className="gen-pad">
        <div className="bg-[linear-gradient(125deg,#272727_0%,#11101D_100%)] discount">
          <img className src={discount} alt="" />
          <p className="pl-1 font-medium text-dimWhite">
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH </span>
            ACCOUNT
          </p>
        </div>
        <div>
          <div className="arrowDiv">
            <h1 className="header md:pr-48 lg:pr-20 md:mt-8 flex gap-2 md:block ">
              <p className=" md:mb-8 mb-4 ">The Next </p>
              <p className="header text-Blue md:mb-8 mb-4">Gneration</p>
            </h1>
            <Arrow></Arrow>
          </div>
          <h1 className="header">Payment Method.</h1>
        </div>
        <div className="p-style ">
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="robot felx-center">
        <img className="w-full" src={robot} alt="" />
      </div>
    </div>
  );
};

export default Hero;
