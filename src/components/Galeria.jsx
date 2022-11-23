import Cards from "components/Cards";
import Tags from "components/Tags";
import dataCards from "data/photos.json";
import { useState } from "react";

export default function Galeria() {
  const [cards, setCards] = useState(dataCards);

  // Gerando uma lista de tags
  const tags = [...new Set(dataCards.map((item) => item.tag))].sort();

  // Add os cards filtrados por tag
  const filterCardsFunction = (tag) => {
    const newCards = dataCards.filter((card) => {
      return card.tag === tag;
    });
    setCards(newCards);
  };

  return (
    <section className="mb-8 w-[65vw]">
      <h2 className="mb-7 text-3xl text-space-300">Navegue pela galeria</h2>
      <Tags
        tags={tags}
        filterCards={filterCardsFunction}
        setCards={setCards}
        dataCards={dataCards}
      />
      <Cards cards={cards} />
    </section>
  );
}
