import bart from "../assets/images/bart.png";

const TopBanner = () => {
  return (
    <>
      <div>
        <div className="flex justify-center space-x-5">
          <img
            src={bart}
            alt="Bart-Simpson"
            className="w-[40px] h-[40px] mt-5"
          />
          <h1 className="text-lg font-bold pr-20 pl-0 py-3 mt-5">
            Simpson With A Sign
          </h1>
          <button className="border border-blue-800 rounded-full text-gray-700 px-4 py-3 mt-5 hover:bg-blue-300 transition-colors duration-700">
            Home
          </button>
          <button className="border border-blue-800 rounded-full text-gray-700  px-4 py-3 mt-5 hover:bg-sky-300 transition-colors duration-700">
            Mint
          </button>
          <button className="border border-blue-800 rounded-full  text-gray-700 px-4 py-3 mt-5 hover:bg-sky-300 transition-colors duration-700">
            Sale
          </button>
          <button className="border border-blue-800 rounded-full  text-gray-700  px-4 py-3 mt-5 mr-20 hover:bg-sky-300 transition-colors duration-700">
            My
          </button>
          <button className="border border-blue-800 rounded-full px-4 py-3 mt-5 hover:bg-sky-300 transition-colors duration-700">
            Log-in to Metamast🦊
          </button>
        </div>
        <div className="border border-gray-700 my-4" />
      </div>
    </>
  );
};

export default TopBanner;
