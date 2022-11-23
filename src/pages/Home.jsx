import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Galeria from "../components/Galeria";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Popular from "../components/Popular";

export default function Home() {
  return (
    <>
      <Header />
      <main className="my-0 mx-6">
        <section className="mt-8 flex items-center justify-between">
          <Menu />
          <Banner />
        </section>
        <div className="my-20 ml-[17%] flex items-start justify-between gap-7">
          <Galeria />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  );
}
