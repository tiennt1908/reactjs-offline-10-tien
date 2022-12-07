export const formatMoney = (value) => {
  const config = {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  };
  const money = new Intl.NumberFormat("vi-VN", config).format(value);
  return money;
};
export const isEmpty = (input) => {
  const regexEmpty = /^([A-Za-z0-9]+(\s?[A-Za-z0-9])*)+$/;
  return (
    input === undefined ||
    input == null ||
    input.length <= 0 ||
    !regexEmpty.test(input)
  );
};
