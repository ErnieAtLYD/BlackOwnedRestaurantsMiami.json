// require('fs').promises are only available for Node 10 and above.
const fs = require("fs").promises;

// neat-csv is a promise-based wrapper for the csv-parser library
const neatCSV = require("neat-csv");

// reminder: we can't just put in an await without an async,
// and we can't put await without putting it in the function
// because that function calling it has to be async.

// SyntaxError: await is only valid in async function
// const data = await fs.readFile("./BlackOwnedMiami.csv", "utf8");

// We can do two things [WHAT ARE THEY?]

// - We can use .then() and .catch()
// - If we wanna use async/await, we gotta create a new async function

// Option 1
// fs.readFile("./BlackOwnedMiami.csv", "utf8").then((data) => {
//   console.log(data);
// });
// Option 2
// const readCSV = async () => {
//   const data = await fs.readFile("./BlackOwnedMiami.csv", "utf8");
//   console.log(data);
// };
// readCSV();

// neatCSV is promise-based rather than callback-based! Because
// we're using async/await we can just do this:
console.time("part-03");
const readCSV = async () => {
  try {
    const data = await fs.readFile("./BlackOwnedMiami.csv", "utf8");
    const csvJson = await neatCSV(data);
    await fs.writeFile("./03.json", JSON.stringify(csvJson));
    console.info("03.json created!");
    console.timeEnd("part-03");
    return;
  } catch (error) {
    console.log(error);
  }
};
readCSV();
