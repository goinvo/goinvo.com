var AWS = require('aws-sdk')
const path = require('path')
AWS.config.update({ region: 'us-east-1' })

let s3 = null

if (process.env.NETLIFY) {
  s3 = new AWS.S3({
    accessKeyId: process.env.GOINVO_AWS_ACCESS_KEY,
    secretAccessKey: process.env.GOINVO_AWS_SECRET_KEY,
    params: { Bucket: process.env.GOINVO_COM_BUCKET_NAME },
  })
} else {
  s3 = new AWS.S3({
    params: { Bucket: process.env.GOINVO_COM_BUCKET_NAME },
  })
}

if (s3 === null) {
  throw 'Error: unable to set s3 connection'
}

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
