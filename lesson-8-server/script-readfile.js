const fs = require("fs");

fs.readFile("./data.json", "utf-8", (err, data) => {
  if (!err) {
    const obj = JSON.parse(data);

    

    obj.four = '4'

    fs.writeFile("./data.json", JSON.stringify(obj), (err) => {});
  }
});
