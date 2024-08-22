import { card } from "../assets";
import Model from "../containers/Model";

const Card = () => {
  return (
    <div className="gen-pad flex flex-col xl:flex-row items-center gap-24 xl:mb-10">
      <div className="order-2 xl:order-1">
        <Model
          title={"Find a better card deal in few easy steps."}
          text={
            "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau."
          }
        ></Model>
        <button className="btn-text">Get Started</button>
      </div>
      <div className="order-1 xl:order-2">
        <img src={card} alt="bill" />
      </div>
    </div>
  );
};

export default Card;
