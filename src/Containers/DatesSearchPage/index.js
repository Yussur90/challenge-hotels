import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function DatesSearchPage(props) {
  const history = useHistory();
  const [startDate, setStartDate] = useState("2020-10-09");
  const [endDate, setEndDate] = useState("2025-10-09");
  console.log(history);
  return (
    <div className="date-search">
      <div className="flex-row">
        <div>from:</div>
        <input
          type="date"
          id="start"
          name="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          min={new Date()}
        ></input>
        <div>to:</div>
        <input
          type="date"
          id="end"
          name="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></input>

        <button
          onClick={() =>
            history.push(
              `/hotelsPage?startDate=${startDate}&endDate=${endDate}`
            )
          }
        >
          search
        </button>
      </div>
    </div>
  );
}

export default DatesSearchPage;
