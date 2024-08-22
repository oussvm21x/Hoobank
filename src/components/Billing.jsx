import { bill } from "../assets";
import Model from "../containers/Model";

const Billing = () => {
  return (
    <div className="gen-pad flex flex-col xl:flex-row items-center">
      <div>
        <img src={bill} alt="bill" />
      </div>
      <div>
        <Model
          title={"Easily control your billing & invoicing."}
          text={
            "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat."
          }
        ></Model>
        <button className="btn-text">Get Started</button>
      </div>
    </div>
  );
};

export default Billing;
