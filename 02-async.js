const fs = require("fs");

// Run the asynchronous CSV parser as a callback
const parse = require("csv-parse");

// Read the file asynchronously as well,also as a callback.
// Just running the two lines as is will give me a
// TypeError [ERR_INVALID_CALLBACK]
// const data = fs.readFile("./BlackOwnedMiami.csv");
// console.log(data);

// "error first" callbacks are a very node.js thing
// fs.readFile("./BlackOwnedMiami.csv", "utf8", (err, data) => {
//   console.log(data);
// });

// Parse the data using the csv-parse library, which ALSO
// uses callbacks!
// YOUR TURN: looks the code sample
// https://csv.js.org/parse/api/callback/ and see if you can edit the
// file to console.log that data.

// fs.readFile("./BlackOwnedMiami.csv", "utf8", (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });

console.time("part-02");
fs.readFile("./BlackOwnedMiami.csv", "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  parse(data, { columns: true }, (err, output) => {
    if (err) {
      return console.log(err);
    }
    fs.writeFile("./02.json", JSON.stringify(output), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("02.json written successfully!");
      console.timeEnd("part-02");
    });
  });
});
