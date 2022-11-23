import itemsMenu from "../data/itensMenu.json";

export default function Menu() {
  return (
    <nav className="w-[18%]">
      <ul className="m-0 flex h-72 list-none flex-col justify-around pl-2">
        {itemsMenu.map((item) => {
          return (
            <li className="group flex items-center justify-start gap-4 ">
              <div className="rounded-lg bg-space-600 p-1 duration-500 ease-in-out group-first:bg-gradient-to-r group-first:from-space-300 group-first:to-space-400  group-hover:bg-gradient-to-r group-hover:from-space-300 group-hover:to-space-400">
                <svg
                  className="cursor-pointer fill-space-200 duration-300 ease-in-out group-first:fill-white  group-hover:fill-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  title={item.title}
                >
                  <path d={item.path} />
                </svg>
              </div>
              <a
                className="text-space-100 no-underline duration-300 ease-in-out group-first:font-bold group-first:text-space-400 group-hover:font-bold group-hover:text-space-400"
                href="/"
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
