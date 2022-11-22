import banner from "../assets/images/banner.png";
export default function Banner() {
  return (
    <div className="relative w-[88%]">
      <h1 className="absolute top-[75px] left-11 h-36 w-[350px] text-5xl text-white">
        A galeria mais completa de fotos do espaço!
      </h1>
      <img className="h-72 w-full" src={banner} alt="A imagem da terra vista do espaço" />
    </div>
  );
}
