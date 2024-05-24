import ButtonPrimary from "@/components/elements/ButtonPrimary";
import Input from "@/components/elements/Input";
import Label from "@/components/elements/Label";
import React from "react";

const SearchFormMobile = () => {
  return (
    <section className="lg:hidden">
      <header className="py-4">
        <h1 className="text-xl font-bold text-accent-primary">
          Place To Stays
        </h1>
      </header>
      <form
        action=""
        className="w-full grid grid-cols-1 place-items-center text-start"
      >
        <div className="w-full">
          <Label>Location</Label>
          <Input type="text" />
        </div>
        <div className="w-full grid grid-cols-2 gap-x-2">
          <div>
            <Label>Check In</Label>
            <Input type="date" />
          </div>
          <div>
            <Label>Checkout</Label>
            <Input type="date" />
          </div>
        </div>
        <div className="w-full  mb-4">
          <Label>Guests</Label>
          <Input type="text" />
        </div>
        <ButtonPrimary variant="primary">Search</ButtonPrimary>
      </form>
    </section>
  );
};

export default SearchFormMobile;
