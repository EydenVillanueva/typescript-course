export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((value: string): number => parseInt(value));

  if (dateParts.length < 3 || dateParts.some(isNaN)) {
    throw new Error('Date format invalid');
  }
  const [day, month, year] = dateParts as [number, number, number];
  return new Date(year, month - 1, day);
};
