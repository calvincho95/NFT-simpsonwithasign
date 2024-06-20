import React, { useState } from "react";
import { ethers } from "ethers";
import bart from "../assets/images/bart.png";

const TopBanner = () => {
  const [account, setAccount] = useState(null);

  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
      } catch (error) {
        console.error("Failed to connect to Metamask", error);
      }
    } else {
      alert(
        "Metamask is not installed. Please install it to use this feature."
      );
    }
  };

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
