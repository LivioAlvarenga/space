import photos from "../data/photos.json";
import Tags from "./Tags";

export default function Galeria() {
  return (
    <section className="mb-8 w-[65vw]">
      <h2 className="mb-7 text-3xl text-space-300">Navegue pela galeria</h2>
      <Tags />
      <ul className="mt-8 flex w-full flex-wrap justify-between gap-7">
        {photos.map((photo) => {
          return (
            <li
              className="w-[288px] cursor-pointer overflow-hidden rounded-[20px] bg-space-600 text-white duration-500 ease-in-out hover:scale-105 hover:shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px]"
              key={photo.id}
            >
              <img
                className="h-[206px] w-full object-cover"
                src={photo.image}
                alt={photo.title}
              />
              <p className="px-4 font-bold ">{photo.title}</p>
              <div className="flex w-full items-center justify-between px-4 pb-4">
                <p className="mt-1">{photo.credits}</p>
                <span className="flex  items-center justify-between gap-6">
                  <svg
                    className="cursor-pointer fill-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    title="Ícone coração de curtir"
                  >
                    <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                  </svg>
                  <svg
                    className="cursor-pointer fill-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    title="Ícone de abrir modal"
                  >
                    <path d="M11,21H3V13H5V17.59L17.59,5H13V3H21V11H19V6.41L6.41,19H11V21Z" />
                  </svg>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
