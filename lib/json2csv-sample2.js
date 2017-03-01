var fs = require('fs');
var json2csv = require('json2csv');
var flatten = require('flat');

const OUTPUT_FILE_PATH2 = './csv/output2.tsv' ;

var json ={
    "glossary": {
      "title": "example glossary",
		  "GlossDiv": {
        "title": "S",
			  "GlossList": {
          "GlossEntry": {
            "ID": "SGML",
					  "SortAs": "SGML",
					  "GlossTerm": "Standard Generalized Markup Language",
					  "Acronym": "SGML",
					  "Abbrev": "ISO 8879:1986",
					  "GlossDef": {
              "para": "A meta-markup language, used to create markup languages such as DocBook.",
						  "GlossSeeAlso": ["GML", "XML"]
            },
					  "GlossSee": "markup"
          }
        }
      }
    }
  };

json2csv({data: flatten(json), fields: ['glossary.title','glossary.GlossDiv.GlossList.GlossEntry.ID','glossary.GlossDiv.GlossList.GlossEntry.GlossTerm','glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para'], del :'\t',quotes : ''}, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile(OUTPUT_FILE_PATH2, csv, function(err) {
    if (err) throw err;
    console.log(csv);
    console.log('file saved ... ' + OUTPUT_FILE_PATH2);
  });
});
