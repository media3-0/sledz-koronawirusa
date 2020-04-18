export default (a, b, sortProperty, sortType) => {
  if (sortType) {
    if (a[sortProperty] < b[sortProperty]) {
      return -1;
    } else if (a[sortProperty] > b[sortProperty]) {
      return 1;
    }
  } else {
    if (a[sortProperty] > b[sortProperty]) {
      return -1;
    } else if (a[sortProperty] < b[sortProperty]) {
      return 1;
    }
  }
  return 0;
}