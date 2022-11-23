import logo from "assets/images/logo.png";

export default function Header() {
  const maskEffect = {
    inset: "0",
    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
  };
  return (
    <header className="my-6 mx-6 flex items-center justify-between">
      <img src={logo} alt="Logo do Alura Space" />
      <div className="relative flex w-1/3 items-center justify-between py-3 px-4">
        <span
          className="absolute -z-[1] rounded-[10px] border-2 border-solid border-transparent bg-gradient-to-r from-space-300 to-space-400"
          style={maskEffect}
        ></span>
        <input
          className="h-8 w-[80%] border-none bg-transparent text-xl text-space-100 outline-none placeholder:text-xl "
          type="text"
          placeholder="O que você procura?"
        />
        <svg
          className="cursor-pointer fill-[url(#grad)]"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          title="ícone de lupa"
        >
          <defs>
            <linearGradient id="grad" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#C98CF1" stopOpacity="1" />
              <stop offset="100%" stopColor="#7B78E5" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
      </div>
    </header>
  );
}
