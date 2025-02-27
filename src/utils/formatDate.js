export default (date) => {
  const d = new Date(date);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  // return [{month},{year},{day}]
  const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

  return `${da} ${mo}`;
  // return date;
};
