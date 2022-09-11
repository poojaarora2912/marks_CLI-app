var readlineSync = require("readline-sync");
var names = "";
var uni_marks = 0;
var pre_marks = 0;
var total = 0;
var records = []
var highest = 0;

for (var i = 0; i < 3; i++) {
  names = readlineSync.question("Enter name:");
  uni_marks = readlineSync.question("Enter uni marks:");
  pre_marks = readlineSync.question("Enter pre marks:");
  total = Number(uni_marks) + Number(pre_marks);
  records.push({ names: names, uni_marks: uni_marks, pre_marks: pre_marks, total: total });
}
console.log(records);

for (var i = 0; i < 3; i++) {
  console.log(records[i].total);
  if (records[i].total > highest) {
    highest = records[i].total;

  }
}

console.log("Highest" + highest);


