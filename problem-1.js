function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }

  const cashOutCharge = 1.75;
  const cashOutTotal = (money * cashOutCharge) / 100;
  return cashOutTotal;
}
const result = cashOut(999);
console.log(result);
