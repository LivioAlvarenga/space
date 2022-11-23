import ButtonOutlineGradient from "components/ButtonOutlineGradient";
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
      <ButtonOutlineGradient text={"Ver mais"} />
    </aside>
  );
}
