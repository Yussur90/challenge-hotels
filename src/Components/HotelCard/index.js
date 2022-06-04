import React, { useMemo, useState } from "react";
import { sortFunction } from "../../helper";

import "./style.css";

function HotelCard({ hotelsList, totalDays }) {
  const [filter, setFilter] = useState("");

  const sortHotels = () => {
    if (filter.key) {
      const newList = sortFunction(hotelsList, filter.key);
      return newList;
    } else {
      return hotelsList;
    }
  };

  const sortedData = useMemo(() => sortHotels(), [filter, hotelsList]);

  return (
    <div className="flex-3">
      <div className="sort-section-container">
        <div className="price-text">Total Nights: {totalDays}</div>
        <div className="sort-section">
          <button
            onClick={() => {
              setFilter({
                key: "name",
              });
            }}
            data-testid="button"
          >
            sort by name
          </button>
          <button
            onClick={() =>
              setFilter({
                price: "price",
              })
            }
          >
            sort by price
          </button>
        </div>
      </div>
      <div className="box-wrapper">
        {sortedData?.map((item, index) => (
          <div className="box" key={index}>
            <div>{item.available_on}</div>
            <div>{item.name}</div>
            <div>{item.newPrice}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelCard;
