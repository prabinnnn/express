const phone = (num) => {
  const con = /[0-9]/g;
  const stringnum = string(num).length;
  if (stringnum < 10 || stringnum > 10) return false;
  return stringnum.startwith("98");
};
const result = phone(9841223344);
console.log({ result });
