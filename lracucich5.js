let password = "d4s3df3S";
password = password.split("");
let result = 0;
count1 = true;
count2 = true;
count3 = true;
count4 = true;
if (password.length >= 6 && password.length <= 16) {
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      count1 = false;
    }
    if (password[i] === password[i].toLowerCase()) {
      count2 = false;
    }
    if (typeof +password[i] === "number") {
      count3 = false;
    }
    if (password[i] == "$" || password[i] == "%" || password[i] == "@") {
      count4 = false;
    }
  }
} else {
  console.log("invalid");
}

if (count1 == false && count2 == false && count3 == false && count4 == false) {
  console.log("valid");
} else {
  console.log("invalid");
}
