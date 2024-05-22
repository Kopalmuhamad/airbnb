import ButtonPrimary from "@/components/elements/ButtonPrimary";
import Input from "@/components/elements/Input";
import Label from "@/components/elements/Label";
import { Imprima } from "next/font/google";
import Image from "next/image";
import React from "react";
import searchIcon from "@/assets/icons/search.svg";

const SearchFormDesktop = () => {
  return (
    <section className="hidden lg:block max-w-[900px]">
      <form
        action=""
        className="w-full flex items-center justify-start gap-0 text-start bg-white rounded-full py-4 px-8"
      >
        <div className="px-4">
          <Label bold>Location</Label>
          <Input type="text" ghost nonePadding />
        </div>
        <div className="px-4 border-l border-black">
          <Label bold>Check In</Label>
          <Input type="date" ghost nonePadding />
        </div>
        <div className="px-4 border-r border-black">
          <Label bold>Check out</Label>
          <Input type="date" ghost nonePadding />
        </div>
        <div className="px-4">
          <Label bold>Guests</Label>
          <Input type="text" ghost nonePadding />
        </div>
        <ButtonPrimary rounded>
          <Image src={searchIcon} alt="" width={24} height={24} />
        </ButtonPrimary>
      </form>
    </section>
  );
};

export default SearchFormDesktop;
