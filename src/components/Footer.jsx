import icons from "../data/icons.json";

export default function Footer() {
  return (
    <footer className=" fixed bottom-0 flex h-20 w-screen items-center justify-between bg-space-600 px-9">
      <ul className="flex items-center gap-7">
        {icons.map((icon) => {
          return (
            <li className="group hover:animate-bounce">
              <a href={icon.href} target="_blank" rel="noreferrer" title={icon.title}>
                <svg
                  className="fill-white duration-1000 ease-in-out group-hover:fill-[url(#grad)]"
                  width={icon.width}
                  height={icon.height}
                  viewBox={icon.viewBox}
                >
                  <defs>
                    <linearGradient id="grad" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stop-color="#C98CF1" stopOpacity="1" />
                      <stop offset="100%" stop-color="#7B78E5" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path d={icon.path} />
                </svg>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="text-xl text-white">
        Desenvolvido por{" "}
        <a
          className="bg-gradient-to-br from-space-300 to-space-400 bg-clip-text text-2xl font-bold text-transparent"
          href="https://www.livioalvarenga.com"
          target="_blank"
          rel="noreferrer"
          title="Portfolio Livio Alvarenga"
        >
          Livio Alvarenga
        </a>
        .
      </p>
    </footer>
  );
}
