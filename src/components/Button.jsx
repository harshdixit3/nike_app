const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center bg-black text-white font-montserrat px-4 py-2 rounded-full mt-4">
      {label}
      <img
        src={iconURL}
        alt="arrow-right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
