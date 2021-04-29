let tvanshan = 5;
let tiv = 4645468;
let ka = true;
tiv = tiv.toString().split("");
for (let i = 0; i < tiv.length; i++) {
  if (tiv[i] == tvanshan) {
    ka = false;
  }
}
if (ka) {
  console.log("no");
} else {
  console.log("yes");
}
