export function sortFunction(list, key) {
  const newList = [...list];
  const sortedList = newList.sort(function (a, b) {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });

  return sortedList;
}
