export default function Tags(props) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-space-100">Busque por tags:</p>
      <ul className="flex items-center justify-between gap-5 p-0 text-white">
        {props.tags.map((tag) => {
          return (
            <li
              className="relative cursor-pointer rounded-lg bg-space-800 py-2 px-3 duration-500 ease-in-out hover:bg-gradient-to-r hover:from-space-300 hover:to-space-400"
              key={tag}
              onClick={() => props.filterCards(tag)}
            >
              {tag}
            </li>
          );
        })}
        <li
          className="cursor-pointer rounded-lg bg-space-800 py-2 px-3 duration-500 ease-in-out hover:bg-gradient-to-r hover:from-space-300 hover:to-space-400"
          onClick={() => props.setCards(props.dataCards)}
        >
          Todas
        </li>
      </ul>
    </div>
  );
}
