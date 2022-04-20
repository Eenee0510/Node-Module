const { count } = require("console");

function ankhNum(num) {
  count = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 0 && num != 1) {
    console.log("It's ankhnii too");
  } else {
    console.log("It's no ankhnii too");
  }
}
ankhNum(4);
