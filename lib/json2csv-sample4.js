var fs = require('fs');
var json2csv = require('json2csv');
var flatten = require('flat');

const OUTPUT_FILE_PATH = './csv/jobs_180617.tsv' ;

// var json = JSON.parse(fs.readFileSync('./json/testdata.json', 'utf8'));
var json = JSON.parse(fs.readFileSync('./json/jobs_180617.json', 'utf8'));

console.log(json);

const fields =[
		 'seq_id'
		,'job_name'
		,'contents.body'
		,'contents.lang'
		,'contents.os'
		,'contents.web'
		,'contents.tech'
		,'sites'
		,'durings'
		,'price'
		,'industry.body'
		,'industry.list'
		,'skill_required.body'
		,'skill_required.lang'
		,'skill_required.os'
		,'skill_required.web'
		,'skill_required.tech'
		,'skill_recommended.body'
		,'skill_recommended.lang'
		,'skill_recommended.os'
		,'skill_recommended.web'
		,'skill_recommended.tech'
		,'environment.body'
		,'environment_lang'
		,'environment.os'
		,'environment.web'
		,'environment.tech'
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
  fs.writeFile(OUTPUT_FILE_PATH, csv, function(err) {
    if (err) throw err;
    console.log(csv);
    console.log(json);
    console.log('file saved ... ' + OUTPUT_FILE_PATH);
  });
});
