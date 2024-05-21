import React from "react";
import CardSlider from "./CardSlider";

interface PropertyListProps {
  value: string;
}

const PropertyList = ({ value }: PropertyListProps) => {
  return (
    <div className="w-full h-full flex items-start justify-center flex-col py-4">
      <header className="py-6">
        <h1 className="text-xl font-bold">{value}</h1>
      </header>
      <CardSlider />
    </div>
  );
};

export default PropertyList;
