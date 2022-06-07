export default (number) => {
  //   format number pake internationalization browser api (bawaan browser)
  // atau paake react number format
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
};
