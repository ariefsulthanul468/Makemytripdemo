import React from "react";
import OFFER_CARD_IMG from "../assets/OFFER_CARD_IMG.png";

const OfferCard = () => {
  const offers = [
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
    {
      offerType: "Holidays",
      title: "Live Now: PACKAGE PRICE DROP DAYS",
      offerDetails: "Grab Flat 45% OFF* on Holiday Packages",
    },
  ];

  return (
    <div className="mt-10">
      {offers.map((item, i) => (
        <div className="shadow-md rounded-lg p-2 w-fit flex gap-4 cursor-pointer">
          <div>
            <img
              className="w-[130px] h-[100%]"
              src={OFFER_CARD_IMG}
              alt=""
            />
          </div>
          <div className="py-1">
            <h4 className="text-gray-500 font-medium text-sm">
              {item?.offerType}
            </h4>
            <h3 className="font-bold text-lg">{item?.title}</h3>
            <h4 className="text-gray-500 font-medium text-sm">{item?.offerDetails}</h4>
            <button className="bg-gradient-to-r from-red-800 to-red-900 text-white p-2 rounded-2xl mt-2 shadow-lg">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferCard;
