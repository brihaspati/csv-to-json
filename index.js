const fs = require('fs');
const csv2json = require('csvjson-csv2json');

const srcFileName = 'happyluke';

fs.readFile(`./source/${srcFileName}.csv`, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const json = csv2json(data, { parseNumbers: true });

  fs.writeFile(`./output/${srcFileName}.json`, JSON.stringify(json, null, 2), 'utf-8', function (
    err
  ) {
    if (err) {
      console.log(err);
    }
  });
});
