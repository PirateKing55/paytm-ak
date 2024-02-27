export const Appbar = () => {
  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  const firstName = localStorage.getItem("firstName");
  const capitalizedFirstName = capitalizeLetter(firstName);
  return (
    <div className="flex justify-between w-full h-[70px] p-[20px] mb-[20px] border-b-2 border-lime-400">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">PayTm</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-slate-300">
          {capitalizedFirstName}
        </h1>
      </div>
    </div>
  );
};
