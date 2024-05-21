import CardSlider from "@/components/CardSlider";
import PropertyList from "@/components/PropertyList";
import Banner from "@/components/homePageComponents/Banner";

const Home = () => {
  return (
    <section className="w-full h-full text-black">
      <Banner />
      <div className="container h-full mx-auto flex items-center justify-center flex-col text-center gap-y-8">
        <PropertyList value="Recommend House" />
        <PropertyList value="Recent House" />
      </div>
    </section>
  );
};

export default Home;
