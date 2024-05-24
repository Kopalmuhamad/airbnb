import React from "react";
import { useAtom } from "jotai";

import ButtonPrimary from "@/components/elements/ButtonPrimary";
import axiosInstance from "@/services/axiosInstance";
import {
  availabilityAtom,
  bookingStatusAtom,
  endDateAtom,
  startDateAtom,
} from "@/atom";

interface IProps {
  id: string;
}

const FormCheckIn: React.FC<IProps> = ({ id }) => {
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);
  const [availability, setAvailability] = useAtom(availabilityAtom);
  const [bookingStatus, setBookingStatus] = useAtom(bookingStatusAtom);

  const checkAvailability = async () => {
    try {
      const response = await axiosInstance.post("/reservations/availability", {
        homestay_id: parseInt(id),
        start_date: startDate,
        end_date: endDate,
      });
      setAvailability(response.data.available ? "Available" : "Not Available");
    } catch (error) {
      setAvailability("Error checking availability");
      console.error(error);
    }
  };

  const handleBooking = async () => {
    if (availability === "Available") {
      try {
        const response = await axiosInstance.post("/reservations/book", {
          homestay_id: parseInt(id),
          start_date: startDate,
          end_date: endDate,
        });
        setBookingStatus("Booking successful!");
      } catch (error) {
        setBookingStatus("Error booking");
        console.error(error);
      }
    } else {
      setBookingStatus("Not available for booking");
    }
  };

  return (
    <div className="w-full rounded-lg border-2 py-2 flex items-center justify-between flex-col px-2 border-black font-medium mt-6 lg:absolute lg:top-0 lg:right-0 lg:max-w-[350px] lg:bg-white lg:shadow-2xl xl:max-w-[450px]">
      <main className="w-full flex items-center justify-between flex-row py-4">
        <h1>
          <span className="font-bold">Rp.1.000.000 /</span>
          <span>Night</span>
        </h1>
        <p>
          <span>0.0</span>
          <span>0 Reviews</span>
        </p>
      </main>

      <form
        className="w-full grid grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          checkAvailability();
        }}
      >
        <div className="col-start-1 flex items-center justify-start flex-col rounded-lg border-2 border-r-0 border-black h-[70px]">
          <p className="text-base font-bold">Check In</p>
          <input
            type="text"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border-none outline-none"
          />
        </div>
        <div className="col-start-2 flex items-center justify-start flex-col rounded-lg border-2 border-black h-[70px]">
          <p className="text-base font-bold">Check Out</p>
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border-none outline-none"
          />
        </div>
      </form>

      <div className="flex items-center justify-center flex-col py-4 gap-y-2">
        <ButtonPrimary variant="primary" onClick={checkAvailability}>
          Check Availability
        </ButtonPrimary>
        {availability && <p>{availability}</p>}
        <ButtonPrimary variant="primary" onClick={handleBooking}>
          Book Now
        </ButtonPrimary>
        {bookingStatus && <p>{bookingStatus}</p>}
      </div>
    </div>
  );
};

export default FormCheckIn;
