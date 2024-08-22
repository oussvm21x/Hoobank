import Stat from "../containers/Stat";

const Stats = () => {
  return (
    <div className="gen-pad my-10 flex items-start justify-between flex-col md:flex-row">
      <Stat title={"User Active"} chiffre={"3800+"}></Stat>
      <Stat title={"TRUSTED BY COMPANY"} chiffre={"230+"}></Stat>
      <Stat title={"TRANSACTION"} chiffre={"$230M+"}></Stat>
    </div>
  );
};

export default Stats;
