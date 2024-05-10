const Button = ({ name, onClickButton }) => {
  return (
    <button
      className={`
        bg-gray-200 w-10 h-10 border-white  hover:bg-sky-300 flex justify-center items-center shadow-lg rounded-full ${
          name === "+"
            ? "bg-blue-500"
            : name === "-"
            ? "bg-red-500"
            : name === "*"
            ? "bg-green-500"
            : name === "/"
            ? "bg-pink-500"
            : name === "Enter" || name === "Del"
            ? "bg-gray-500 text white"
            : "bg-gray-50"
        }`}
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;
