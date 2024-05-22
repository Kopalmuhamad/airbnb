import React from "react";
import SearchFormDesktop from "./SearchFormDesktop";
import ButtonPrimary from './../../components/elements/ButtonPrimary';

const Banner = () => {
  return (
    <main className="h-[40vh] lg:h-[70vh] w-full flex items-center justify-center flex-col text-center bg-[url('../assets/images/banner1.jpg')] bg-no-repeat bg-cover bg-fixed bg-bottom">
      <SearchFormDesktop />
      <h1 className="text-xl md:text-2xl xl:text-3xl font-bold my-4 text-white">
        Book Top Hill Tent Experience Local Things To Do, Where Ever You Do
      </h1>
      <ButtonPrimary variant="primary">I'm flexible</ButtonPrimary>
    </main>
  );
};

export default Banner;
