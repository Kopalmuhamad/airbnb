"use client";
import React, { useEffect } from "react";
import Card from "./Card";
import { getAllHomeStays } from "@/services/api";
import { useState } from "react";
import { HomeStaysData } from "@/services/interfaces";

const PropertyList = () => {
  const [homeStayData, setHomeStayData] = useState<HomeStaysData[]>([]);
  const getHomeStays = async () => {
    try {
      const response = await getAllHomeStays();
      setHomeStayData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHomeStays();
  }, []);
  return (
    <div className="w-full h-full flex items-start justify-center flex-col py-4 px-2">
      <main className="w-full grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {homeStayData.map((items) => (
          <Card
            key={items.ID}
            Images1={items.Images1}
            HomestayName={items.HomestayName}
            Description={items.Description}
            Address={items.Address}
            PricePerNight={items.PricePerNight}
            ID={items.ID}
          />
        ))}
      </main>
    </div>
  );
};

export default PropertyList;
