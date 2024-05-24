
import PropertyList from "@/app/home/PropertyList";
import Banner from "@/app/home/Banner";
import SearchFormMobile from "./SearchFormMobile";


const Home = () => {
  return (
    <section className="w-full h-full text-black">
      <Banner />
      <div className="container h-full mx-auto flex items-center justify-center flex-col text-center gap-y-8">
        <SearchFormMobile />
        <PropertyList />
      </div>
    </section>
  );
};

export default Home;
