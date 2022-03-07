// commands/index.js
const fs = require("fs");

const pwd = () => {
  process.stdout.write(process.cwd());
};
const date = () => {
  process.stdout.write(Date());
};
const ls = () => {
  fs.readdir(".", function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
  });
};
module.exports = {
  pwd,
  date,
  ls,
};
