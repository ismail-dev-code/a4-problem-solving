function isBestFriend(f1, f2) {
  if (typeof f1 !== "object" || typeof f2 !== "object") {
    return "Invalid";
  }
 else if (f1.roll === f2.bestFriend && f2.roll === f1.bestFriend) {
    return true;
  }
  else{
    return false;
  }
}

const result = isBestFriend("hashem", { name:"kashem", roll: 2, bestFriend: 11});
console.log(result);
