import Nav from "./components/Nav";
import {
  Hero,
  SuperQuality,
  Subscribe,
  SpecialOffer,
  Services,
  PopularProducts,
  Footer,
  CustomerReviews,
} from "./sections";
const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b xl:padding-l">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-purple-100">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="padding bg-black">
        <Footer />
      </section>
    </main>
  );
};
export default App;
