const getFormattedDate = (date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  return formattedDate;
};
export default getFormattedDate;
