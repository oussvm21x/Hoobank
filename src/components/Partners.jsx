import { airbnb, binance, coinbase, dropbox } from "../assets";

const Cadre = ({ image }) => {
  return (
    <div className="p-5 w-48 xl:w-64">
      <img src={image} alt="" />
    </div>
  );
};

const Partners = () => {
  return (
    <div className="gen-pad flex items-center justify-between gap-5 flex-col sm:flex-row mb-10">
      <Cadre image={airbnb}></Cadre>
      <Cadre image={binance}></Cadre>
      <Cadre image={coinbase}></Cadre>
      <Cadre image={dropbox}></Cadre>
    </div>
  );
};

export default Partners;
