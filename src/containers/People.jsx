import { quotes } from "../assets";

const People = ({ text, name, title, image }) => {
  return (
    <div className="flex flex-col items-start  hover:bg-[linear-gradient(125deg,#272727_0%,#11101D_100%)] hover:cursor-pointer rounded-xl p-10 xl:w-[370px] xl:h-[395px]">
      <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-10 flex flex-col items-end justify-start ">
        <img src={quotes} alt="" />
      </div>

      <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-10 xl:h-[128px]">
        <p className="personP ">{text}</p>
      </div>
      <div className="flex items-center gap-6 xl:gap-10">
        <div>
          <img src={image} alt="person" />
        </div>
        <div className="">
          <h1 className="personHeader">{name}</h1>
          <p className="personTxt">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default People;
