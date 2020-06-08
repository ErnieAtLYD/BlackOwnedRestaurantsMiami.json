const fs = require("fs");
const csv = require("csv-parser");
const results = [];

// fs.createReadStream("./BlackOwnedMiami.csv")
//   .on("error", (error) => {
//     console.log(error);
//   })
//   .pipe(csv())
//   .on("data", (data) => results.push(data))
//   .on("end", () => {
//     console.log(results);
//   });

// Well, this is different. Let's take a look.
// line 9 uses this "pipe" thing which redirects the stream to run csv(), or convert to a string.
// lines 10, 11, and 6 are events:
// - data: emits for each row of data parsed, except for the header row. I got that information from the csv-parser docs.
// - end: used to detect the end of parsing. This is a common event type for streams: https://nodejs.org/api/stream.html#stream_class_stream_readable
// - error: we still need our error handling!

// So we're able to read the stream - but we need to take that stream and be able to write a file as well.
const writeJSONFile = (data) => {
  const filename = "04.json";
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) return console.log(err);
    console.log("04.json created!");
    console.timeEnd("part-04");
  });
};

console.time("part-04");
fs.createReadStream("./BlackOwnedMiami.csv")
  .on("error", (error) => {
    console.log(error);
  })
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    writeJSONFile(results);
  });
