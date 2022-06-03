export function filterHotelsHelper(startDateVal, endDateVal, hotels) {
  const start = new Date(startDateVal);
  const end = new Date(endDateVal);
  const Difference_In_Time = end.getTime() - start.getTime();
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  const list = hotels.filter((item) => {
    const date = new Date(item.available_on);
    return date > start && date < end;
  });

  const listWithPriceFotTotalNights = list.map((item) => {
    return {
      ...item,
      newPrice: item.price * Difference_In_Days,
    };
  });

  const max_arr = listWithPriceFotTotalNights.map((el) => el.newPrice);
  const max = Math.max(...max_arr);
  const min = Math.min(...max_arr);
  return {
    totalDays: Difference_In_Days,
    max,
    min,
    listWithPriceFotTotalNights,
  };
}
