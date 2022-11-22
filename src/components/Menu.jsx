export default function Menu() {
  return (
    <nav className="w-[18%]">
      <ul className="m-0 flex h-72 list-none flex-col justify-around pl-2">
        <li className="flex items-center justify-start gap-4">
          <div className="rounded-lg bg-gradient-to-r from-space-300 to-space-400 p-1">
            <svg
              className="cursor-pointer fill-none stroke-white stroke-2"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              title="ícone de home"
            >
              <path d="M12,3L20,9V21H15V14H9V21H4V9L12,3Z" />
            </svg>
          </div>
          <a className="font-bold text-space-400 no-underline" href="/">
            Início
          </a>
        </li>
        <li className="group flex items-center justify-start gap-4">
          <div className="rounded-lg bg-space-600 p-1 duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-space-300 group-hover:to-space-400">
            <svg
              className="cursor-pointer fill-space-200 duration-300 ease-in-out group-hover:fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              title="ícone mais vistos"
            >
              <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
            </svg>
          </div>
          <a
            className=" text-space-100 no-underline duration-300 ease-in-out group-hover:font-bold group-hover:text-space-400"
            href="/"
          >
            Mais vistas
          </a>
        </li>
        <li className="group flex items-center justify-start gap-4 ">
          <div className="rounded-lg bg-space-600 p-1 duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-space-300 group-hover:to-space-400">
            <svg
              className="cursor-pointer fill-space-200 duration-300 ease-in-out group-hover:fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              title="ícone mais curtidas"
            >
              <path d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z" />
            </svg>
          </div>
          <a
            className=" text-space-100 no-underline duration-300 ease-in-out group-hover:font-bold group-hover:text-space-400"
            href="/"
          >
            Mais curtidas
          </a>
        </li>
        <li className="group flex items-center justify-start gap-4 ">
          <div className="rounded-lg bg-space-600 p-1 duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-space-300 group-hover:to-space-400">
            <svg
              className="cursor-pointer fill-space-200 duration-300 ease-in-out group-hover:fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              title="ícone de novas"
            >
              <path d="M10.6 9.6L9 15L7.4 9.6L2 8L7.4 6.4L9 1L10.6 6.4L16 8L10.6 9.6M17 14.2L21 12L18.8 16L21 20L17 17.8L13 20L15.2 16L13 12L17 14.2M10 16L8.3 19L10 22L7 20.3L4 22L5.7 19L4 16L7 17.7L10 16" />
            </svg>
          </div>
          <a
            className=" text-space-100 no-underline duration-300 ease-in-out group-hover:font-bold group-hover:text-space-400"
            href="/"
          >
            Novas
          </a>
        </li>
        <li className="group flex items-center justify-start gap-4 ">
          <div className="rounded-lg bg-space-600 p-1 duration-500 ease-in-out group-hover:bg-gradient-to-r group-hover:from-space-300 group-hover:to-space-400">
            <svg
              className="cursor-pointer fill-space-200 duration-300 ease-in-out group-hover:fill-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              title="ícone surpreenda-me"
            >
              <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z" />
            </svg>
          </div>
          <a
            className=" text-space-100 no-underline duration-300 ease-in-out group-hover:font-bold group-hover:text-space-400"
            href="/"
          >
            Surpreenda-me
          </a>
        </li>
      </ul>
    </nav>
  );
}
