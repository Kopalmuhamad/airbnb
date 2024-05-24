"use client";

import React, { useEffect, useState } from "react";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import FormCheckIn from "./FormCheckIn";
import HeaderDetail from "./HeaderDetail";
import DividingLine from "./DividingLine";
import Box from "./Box";
import axiosInstance from "@/services/axiosInstance";
import { useAtom } from "jotai";
import {
  availabilityAtom,
  bookingStatusAtom,
  endDateAtom,
  startDateAtom,
} from "@/atom";

interface HomeStaysData {
  HomestayName: string;
  Description: string;
  Images1: string;
  Images2: string;
  Images3: string;
}

interface FeedbackData {
  created_at: string;
  feedback: string;
  homestay_id: number;
  id: number;
  rating: number;
  user_id: number;
}

const DetailProperty = ({ params }: { params: { ID: string } }) => {
  const { ID } = params;
  const [data, setData] = useState<HomeStaysData | null>(null);
  const [feedback, setFeedback] = useState<FeedbackData[]>([]);
  const [startDate, setStartDate] = useAtom(startDateAtom);
  const [endDate, setEndDate] = useAtom(endDateAtom);
  const [availability, setAvailability] = useAtom(availabilityAtom);
  const [bookingStatus, setBookingStatus] = useAtom(bookingStatusAtom);

  const homeStayById = async () => {
    try {
      const response = await axiosInstance.get(`/homestays/${ID}`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching homestay data:", error);
    }
  };

  const feedBackById = async () => {
    try {
      const response = await axiosInstance.get(`/feedback/${ID}`);
      setFeedback(response.data.data || []);
    } catch (error) {
      console.error("Error fetching feedback data:", error);
      setFeedback([]); // Set feedback to empty array on error
    }
  };

  useEffect(() => {
    homeStayById();
    feedBackById();
  }, [ID]);

  return (
    <section className="w-full mt-[80px] py-8 px-2 relative">
      <div className="container mx-auto h-full relative">
        <HeaderDetail
          image1={data?.Images1}
          image2={data?.Images2}
          image3={data?.Images3}
        />
        <div className="w-full h-full relative">
          <Box className="flex items-start justify-start gap-x-4 py-6 text-start lg:col-start-1 lg:h-fit">
            <h1 className="text-lg lg:text-2xl font-extrabold capitalize">
              {data?.HomestayName}
            </h1>
          </Box>
          <DividingLine />
          <FormCheckIn id={ID} />
          <Box className="col-start-1">
            <h1 className="text-xl font-bold">About This Listing</h1>
            <p className="text-base font-medium">
              Best Accommodation for a perfect vacation trip
            </p>
          </Box>
          <DividingLine />
          <Box className="col-start-1">
            <h1 className="text-xl font-bold">The Space</h1>
            <p>{data?.Description}</p>
          </Box>
          <DividingLine />
          <Box className="!text-center flex items-center justify-center flex-col lg:items-start lg:text-start ">
            <h1 className="text-xl font-bold">Reviews</h1>
            {feedback.length === 0 ? (
              <p className="text-base font-medium mb-2">No Reviews Yet</p>
            ) : (
              feedback.map((fb) => (
                <div key={fb.id}>
                  <p>{fb.feedback}</p>
                  <p>Rating: {fb.rating}</p>
                </div>
              ))
            )}
            <ButtonPrimary variant="primary">View Other Reviews</ButtonPrimary>
          </Box>
          <DividingLine />
          <Box>
            <div className="w-full h-full container mx-auto flex items-center justify-between">
              <h1>
                <span className="font-bold text-base">Rp.1.000.000/</span>
                <span>Night</span>
              </h1>
              {/* <ButtonPrimary variant="primary" onClick={handleBooking}>
                Booking
              </ButtonPrimary> */}
            </div>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default DetailProperty;
