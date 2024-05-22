import React from "react";
import Card from "./Card";



interface PropertyListProps {
  value: string;
}

const PropertyList = ({ value }: PropertyListProps) => {
  return (
    <div className="w-full h-full flex items-start justify-center flex-col py-4 px-2">
      <header className="py-6">
        <h1 className="text-xl font-bold">{value}</h1>
      </header>
      <main className="w-full grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {[...Array(11)].map((_, index) => (
        <Card key={index} index={index} />
        ))}
      </main>
    </div>
  );
};

export default PropertyList;
