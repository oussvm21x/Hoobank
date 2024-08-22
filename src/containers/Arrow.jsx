import { arrowUp } from "../assets";

const Arrow = () => {
  return (
    <div className="arrow">
      <div className="flex">
        <p>Get</p>
        <img src={arrowUp} alt="arrowUp" />
      </div>
      <p>Started</p>
    </div>
  );
};
export default Arrow;
