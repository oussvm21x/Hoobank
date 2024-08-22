import { send, shield, star } from "../assets";
import FeatureModel from "../containers/FeatureModel";
import Model from "../containers/Model";

const Bussiness = () => {
  return (
    <div className="gen-pad flex flex-col xl:flex-row items-start gap-10 xl:mb-10 ">
      <div>
        <Model
          title={"You do the business, we’ll handle the money."}
          text={
            "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
          }
        ></Model>
        <button className="btn-text">Get Started</button>
      </div>
      <div>
        <FeatureModel
          image={star}
          title={"Rewards"}
          text={
            "The best credit cards offer some tantalizing combinations of promotions and prizes"
          }
        ></FeatureModel>

        <FeatureModel
          image={shield}
          title={"100% Secured"}
          text={
            "We take proactive steps make sure your information and transactions are secure."
          }
        ></FeatureModel>

        <FeatureModel
          image={send}
          title={"Balance Transfer"}
          text={
            "A balance transfer credit card can save you a lot of money in interest charges."
          }
        ></FeatureModel>
      </div>
    </div>
  );
};

export default Bussiness;
