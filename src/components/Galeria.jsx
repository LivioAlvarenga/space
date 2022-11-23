import cards from "data/photos.json";
import Cards from "components/Cards";
import Tags from "components/Tags";

export default function Galeria() {
  return (
    <section className="mb-8 w-[65vw]">
      <h2 className="mb-7 text-3xl text-space-300">Navegue pela galeria</h2>
      <Tags />
      <Cards cards={cards} />
    </section>
  );
}
