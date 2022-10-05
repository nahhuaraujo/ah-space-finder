export const capitalizeFirstLetter = (value: any) => {
  if (typeof value === 'number') {
    return value;
  }
  return value && value[0].toUpperCase() + value.slice(1);
};
