export default function ButtonOutlineGradient(props) {
  const maskEffect = {
    inset: "0",
    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
  };
  return (
    <button className="relative mt-6 w-full cursor-pointer rounded-[10px] border-none bg-transparent py-3 px-4 text-white duration-500 ease-in-out hover:bg-gradient-to-r hover:from-space-300 hover:to-space-400">
      {props.text}
      <span
        className="absolute -z-[1] rounded-[10px] border-2 border-solid border-transparent bg-gradient-to-r from-space-300 to-space-400"
        style={maskEffect}
      ></span>
    </button>
  );
}
