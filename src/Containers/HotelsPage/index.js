import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import HotelCard from "../../Components/HotelCard";
import { filterHotelsHelper } from "./helperHotelPage";
import "./style.css";

function HotelsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const startDateVal = query.get("startDate");
  const endDateVal = query.get("endDate");

  const [hotels, setHotels] = useState([]);
  const [filterHotels, setFilterHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalDays, setTotalDays] = useState("");

  const [priceRange, setPriceRange] = useState("");
  const [searchName, setSearchName] = useState("");

  const [maxVal, setMaxVal] = useState("");
  const [minVal, setMinVal] = useState("");

  const filterNamePrice = (price, name) => {
    let newList = [...filterHotels];
    if (name) {
      newList = newList.filter((item) => {
        return item.name.toLowerCase().includes(name);
      });
    }
    if (price) {
      newList = newList.filter((item) => {
        return item.newPrice <= price;
      });
    }
    return newList;
  };

  const filterNamePriceList = useMemo(
    () => filterNamePrice(priceRange, searchName),
    [priceRange, searchName, filterHotels]
  );

  function filterHotelsFun() {
    const data = filterHotelsHelper(startDateVal, endDateVal, hotels);

    setMaxVal(data.max);
    setMinVal(data.min);

    setTotalDays(data.totalDays);
    setFilterHotels(data.listWithPriceFotTotalNights);
  }

  useEffect(() => {
    filterHotelsFun();
  }, [startDateVal, endDateVal, loading]);

  function fetchHotels() {
    fetch("https://run.mocky.io/v3/48244d7b-52e9-4b5f-b122-bd763e53fa5c")
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        //comment
        //remove the comma from arr because it cannot be converted to json for that reason i do these lines
        const convertToArray = data.split("\n");
        convertToArray.splice(convertToArray.length - 2, 2);
        const joinArr = convertToArray.join("\n");
        const result = joinArr + "}]";
        setHotels(JSON.parse(result));
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchHotels();
  }, []);

  if (loading) {
    return "...loading";
  }

  if (!startDateVal || !endDateVal) {
    return (
      <div className="empty-component">
        <h1>
          There is no data match these range date you should select start date
          and end date
        </h1>
      </div>
    );
  }

  return (
    <div className="hotel">
      {filterHotels.length ? (
        <>
          <div className="section">
            <div className="first-section">
              <input
                type="search"
                id="search"
                name="search"
                placeholder="Hotel Name"
                onChange={(e) => setSearchName(e.target.value)}
                value={searchName}
              />
              <div>price filter: {priceRange}</div>

              <input
                className="slider"
                type="range"
                min={minVal}
                max={maxVal}
                value={priceRange || 0}
                id="myRange"
                onChange={(e) => setPriceRange(e.target.value)}
              ></input>
            </div>
          </div>
          <HotelCard hotelsList={filterNamePriceList} totalDays={totalDays} />
        </>
      ) : null}
    </div>
  );
}

export default HotelsPage;
