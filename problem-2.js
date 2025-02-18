function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  } else if (
    email.slice(0, 1) === "." ||
    email.slice(0, 1) === "-" ||
    email.slice(0, 1) === "_" ||
    email.slice(0, 1) === "+" ||
    email.slice(0, 1) === "@"
  ) {
    return false;
  } else if (
    email.includes("@") && !email.includes(" ") && email.includes(".com"))
   {
    return true;
  } 
  else {
    return false;
  }
}

const result = validEmail("abul@gmail.com");
console.log(result);
