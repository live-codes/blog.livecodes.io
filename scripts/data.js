var fs = require("fs");
var path = require("path");

function sponsors() {
  var sponsorsSrc = "data/sponsors.html";
  var sponsorsOutput = "static/data/sponsors.json";

  var sponsorsHTML = fs.readFileSync(path.resolve(sponsorsSrc), "utf8");
  var sponsorsJSON = { content: sponsorsHTML };

  fs.writeFileSync(
    path.resolve(sponsorsOutput),
    JSON.stringify(sponsorsJSON),
    "utf8"
  );
}

sponsors();
