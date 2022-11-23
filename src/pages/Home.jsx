import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Galeria from "../components/Galeria";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-0 mx-6">
        <section className="mt-8 flex items-center justify-between">
          <Menu />
          <Banner />
        </section>
      </main>
      <div className="flex justify-between items-start ml-[18%] mt-20">
        <Galeria />
      </div>
      <Footer />
    </>
  );
}
