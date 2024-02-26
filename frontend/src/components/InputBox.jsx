export const InputBox = ({ onChange }) => {
  return (
    <input
      onChange={onChange}
      className="border rounded-md border-lime-400 bg-black w-full p-[5px] mb-[15px] text-slate-300"
    ></input>
  );
};
