import simpson from "../assets/images/simpson.png";

const Picture = () => {
  return (
    <div className="flex justify-center items-center mt-0">
      <img src={simpson} alt="Simpson" className="w-[600px] h-[600px] mb-10" />
    </div>
  );
};

export default Picture;
