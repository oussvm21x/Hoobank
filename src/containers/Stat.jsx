const Stat = ({ title, chiffre }) => {
  return (
    <div className="flex-center-between gap-3  mb-5">
      <h1 className="stat"> {chiffre}</h1>
      <h1 className="text-Blue statText">{title}</h1>
    </div>
  );
};

export default Stat;
