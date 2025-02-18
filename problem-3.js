function electionResult(votes) {
  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  let mangoCount = 0;
  let bananaCount = 0;
  let voteDraw = false;
  for (let item of votes) {
    if (item === "mango") {
      mangoCount++;
    } else if (item === "banana") {
      bananaCount++;
    } else if (bananaCount === mangoCount || votes.length === 0) {
      voteDraw = true;
    }
  }
  if (mangoCount < bananaCount) {
    return "Banana";
  } else if (bananaCount < mangoCount) {
    return "Mango";
  } else {
    return "Draw";
  }
}

const result = electionResult(["mango", "BananA", "na vote", "na vote"]);

console.log(result);
