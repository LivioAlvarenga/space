import popular from "data/popular.json";

export default function Popular() {
  return (
    <aside className="flex h-auto flex-col items-center justify-center">
      <h2 className="mt-20 mb-8 text-center text-3xl text-space-300">Populares</h2>
      <ul className="flex h-[77%] flex-col justify-between gap-4">
        {popular.map((popular) => {
          return (
            <li className="overflow-hidden rounded-xl" key={popular.id}>
              <img
                className="h-[120px] w-[212px] object-cover"
                src={popular.path}
                alt={popular.alt}
              />
            </li>
          );
        })}
      </ul>
      <button className="maskEffect relative mt-6 w-full cursor-pointer rounded-[10px] border-none bg-transparent py-3 px-4 text-white duration-500 ease-in-out hover:bg-gradient-to-r hover:from-space-300 hover:to-space-400">
        Ver mais
      </button>
    </aside>
  );
}
