import React from "react";
import CardSlider from "./CardSlider";

interface PropertyListProps {
  value: string;
}

const PropertyList = ({ value }: PropertyListProps) => {
  return (
    <section className="w-full">
      <div className="w-full h-full flex items-start justify-center flex-col">
        <header className="py-4">
          <h1 className="text-xl font-bold">{value}</h1>
        </header>
        <CardSlider />
      </div>
    </section>
  );
};

export default PropertyList;
