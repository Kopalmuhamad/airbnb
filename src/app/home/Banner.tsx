import React from "react";
import ButtonPrimary from "../../components/ui/ButtonPrimary";

const Banner = () => {
  return (
    <main className="h-[40vh] lg:h-[70vh] w-full flex items-center justify-center flex-col text-center bg-[url('../assets/images/banner1.jpg')] bg-no-repeat bg-cover bg-fixed bg-bottom">
      <h1 className="text-xl md:text-2xl xl:text-3xl font-bold my-4 text-white">
        Book Top Hill Tent Experience Local Things To Do, Where Ever You Do
      </h1>
      <ButtonPrimary>I'm flexible</ButtonPrimary>
    </main>
  );
};

export default Banner;
