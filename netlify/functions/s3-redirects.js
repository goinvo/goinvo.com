var AWS = require('aws-sdk')
const path = require('path')
AWS.config.update({ region: 'us-east-1' })

var s3 = new AWS.S3({
  params: { Bucket: 'www.goinvo.com-2018' },
})

var jsonObj = require(path.join(__dirname, '..', '..', '/redirects.json'))

for (var myRedirect in jsonObj) {
  s3.putObject(
    {
      Key: myRedirect,
      WebsiteRedirectLocation: jsonObj[myRedirect],
    },
    (err, data) => {
      if (err) {
        console.log('Error:', err)
      } else {
        console.log('Success:', data)
      }
    }
  )
}
