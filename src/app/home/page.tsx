import PropertyList from "@/app/home/PropertyList";
import Banner from "@/app/home/Banner";

const Home = () => {
  return (
    <section className="w-full h-full text-black">
      <Banner />
      <div className="container h-full mx-auto flex items-center justify-center flex-col text-center gap-y-8">
        <PropertyList value="Recent House" />
      </div>
    </section>
  );
};

export default Home;
