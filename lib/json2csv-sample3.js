var fs = require('fs');
var json2csv = require('json2csv');

const OUTPUT_FILE_PATH3 = '../csv/output3.tsv' ;

var json = JSON.parse(fs.readFileSync('../json/testdata.json', 'utf8'));

console.log(json);

const fields =[
		 'seq_id'
		,'job_name'
		,'contents'
		,'sites'
		,'durings'
		,'price'
		,'industry'
		,'skill_required'
		,'skill_recommended'
		,'environment'
		,'age'
		,'can_accept_foreigner'
		,'required_numbers'
		,'counts_for_interview'
		,'working_time'
		,'average_work_hours'
		,'organization'
		,'commercial_flow'
		,'payment_site'
		,'settlement_to_overhours'
		,'note'
		,'file_name'
		,'received_date'
		,'from_email_address'
		]

json2csv({'data': json, 'fields': fields, 'del' :'\t','quotes' : ''}, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile(OUTPUT_FILE_PATH3, csv, function(err) {
    if (err) throw err;
    console.log(csv);
    console.log('file saved ... ' + OUTPUT_FILE_PATH3);
  });
});
