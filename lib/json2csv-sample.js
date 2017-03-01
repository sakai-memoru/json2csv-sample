var fs = require('fs');
var json2csv = require('json2csv');

const OUTPUT_FILE_PATH = './csv/output.tsv' ;

var json = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];

json2csv({data: json, fields: ['color','car'], del :'\t',quotes : ''}, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile(OUTPUT_FILE_PATH, csv, function(err) {
    if (err) throw err;
    console.log(csv);
    console.log('file saved ... ' + OUTPUT_FILE_PATH);
  });
});
