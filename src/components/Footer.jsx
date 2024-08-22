import { facebook, instagram, linkedin, logo, twitter } from "../assets";
const MyList = ({ title, items }) => {
  return (
    <div className="mb-5">
      <h3 className="listHeader text-left mb-3 cursor-pointer">{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li className="listStyle">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CopyWrire = ({ text, images }) => {
  return (
    <div className="flex justify-between items-start flex-col lg:flex-row">
      <div className="mb-10">
        <p className="listStyle text-left">{text}</p>
      </div>
      <div className="flex justify-between items-center gap-10">
        {images.map((image, index) => (
          <div>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Foter = () => {
  return (
    <div className="gen-pad ">
      <div className="flex items-start justify-between flex-col lg:flex-row mb-20">
        <div className="mb-5">
          <div className="mb-5">
            <img src={logo} alt="logo" />
          </div>
          <div className="w-[312px] review-text">
            <p>A new way to make the payments easy, reliable and secure.</p>
          </div>
        </div>
        <MyList
          title={"Usefull Links"}
          items={[
            "Content",
            "How it Works",
            "Create",
            "Explore",
            "Terms & Services",
          ]}
        ></MyList>
        <MyList
          title={"Community"}
          items={[
            "Help Center",
            "Partners",
            "Suggestions",
            "Blog",
            "Newsletters",
          ]}
        ></MyList>
        <MyList
          title={"Partner"}
          items={["Our Partner", "Become a Partner"]}
        ></MyList>
      </div>
      <div className="mb-10 w-full border-[1px] border-solid border-dimWhite"></div>
      <div>
        <CopyWrire
          text={"Copyright 2021 HooBank. All Rights Reserved."}
          images={[facebook, twitter, linkedin, instagram]}
        ></CopyWrire>
      </div>
    </div>
  );
};

export default Foter;
