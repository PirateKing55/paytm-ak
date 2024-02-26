export const Button = ({ label, onclick }) => {
  return (
    <button className="bg-lime-400 text-black font-medium rounded-md w-full p-[7px]">
      {label}
    </button>
  );
};
