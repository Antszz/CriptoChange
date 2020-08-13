import numeral from "numeral";

const dollarFilert = function(value) {
  if (!value) {
    return "$ 0";
  }
  return numeral(value).format("($ 0.00a)");
};

const percentFilter = function(value) {
  if (!value) {
    return "0%";
  }
  return `${Number(value).toFixed(2)}%`;
};

export { dollarFilert, percentFilter };
