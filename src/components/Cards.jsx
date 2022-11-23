import Card from "./Card";

export default function Cards(props) {
  return (
    <ul className="mt-8 flex w-full flex-wrap justify-between gap-7">
      {props.cards.map((card) => {
        return <Card card={card} key={card.id}/>;
      })}
    </ul>
  );
}
