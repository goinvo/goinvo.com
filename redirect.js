var AWS = require('aws-sdk');
AWS.config.update(config);

var s3 = new AWS.S3({
	// params: {Bucket: 'www.goinvo.com'}
});

var jsonObj = require("./redirects.json");

for(var myRedirect in jsonObj) {
	s3.putObject ({
		Key: myRedirect,
		WebsiteRedirectLocation: 'http://'+jsonObj[myRedirect]
	}, (err,data) => {
    if(err) {
        console.log(err)
    } else {
    	console.log(data)
    }
  }));
}
