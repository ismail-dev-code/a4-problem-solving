function calculateWatchTime(times) {
  let total = 0;
  for (const second of times) {
    if (typeof second !== "number") {
      return "Invalid";
    } else {
      total = total + second;
    }
  }
  const hour = Math.floor(total / 3600);
  const minute = Math.floor((total % 3600) / 60);
  const second = Math.floor(total % 60);
  return {
    hour: Math.round(hour),
    minute: Math.round(minute),
    second: Math.round(second),
  };
}

const result = calculateWatchTime([100, 3800]);
console.log(result);
