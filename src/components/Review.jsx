import { people01, people02, people03 } from "../assets";
import People from "../containers/People";

const Review = () => {
  return (
    <div className="gen-pad mb-10">
      <div className="flex  items-start justify-between flex-col xl:flex-row mb-10">
        <h1 className="review-header ">What people are saying about us</h1>
        <p className="review-text">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex items-start justify-between flex-col xl:flex-row xl:items-center">
        <People
          text={
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
          }
          title={"Founder & Leader"}
          name={"Herman Jensen"}
          image={people01}
        ></People>
        <People
          text={
            "Money makes your life easier. If you're lucky to have it, you're lucky."
          }
          title={"Founder & Leader"}
          name={"Steve Mark"}
          image={people02}
        ></People>
        <People
          text={
            "It is usually people in the money business, finance, and international trade that are really rich."
          }
          title={"Founder & Leader"}
          name={"Kenn Gallagher"}
          image={people03}
        ></People>
      </div>
    </div>
  );
};

export default Review;
