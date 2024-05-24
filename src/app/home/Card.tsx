import Link from "next/link";
import Image from "next/image";
import pinMaps from "@/assets/icons/pin_maps.svg";
import { HomeStaysData } from "@/services/interfaces";

const Card = ({
  Images1,
  Images2,
  Images3,
  HomestayName,
  Description,
  PricePerNight,
  Address,
  ID,
}: HomeStaysData) => {
  return (
    <Link
      href={`/detailProperty/${ID}`}
      className="w-full shadow-2xl rounded-lg overflow-hidden text-start"
    >
      {Images1 && <img src={Images1} alt="" />}
      {Images2 && <img src={Images2} alt="" />}
      {Images3 && <img src={Images3} alt="" />}
      <h1 className="text-lg font-bold px-2 capitalize">{HomestayName}</h1>
      <p className="text-base font-medium px-2 flex items-center justify-start gap-x-1">
        {Description}
      </p>
      <div className="flex items-center justify-between text-base font-medium px-2">
        <span className="flex items-center justify-between gap-x-1">
          <Image
            src={pinMaps}
            alt=""
            width={14}
            height={14}
            className="w-4 h-4"
          />
          <p className="text-base font-medium capitalize">{Address}</p>
        </span>
      </div>
      <div className=" py-1 px-2">
        <h3 className="text-semibold text-accent-primary font-bold">
          {PricePerNight}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
