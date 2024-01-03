require('dotenv').config()

const fs = require('fs')
const path = require('path')
const mime = require('mime-types')
const AWS = require('aws-sdk')
const randomstring = require('randomstring')
const s3 = new AWS.S3()
const cloudfront = new AWS.CloudFront()

const uploadFile = filePath => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err
    }

    const s3Path = filePath.replace(__dirname + '/public/', '')
    const cacheControl = filePath.includes('public/static/')
      ? 'cache-control: public, max-age=31536000, immutable'
      : 'public, max-age=0, must-revalidate'
    const params = {
      Bucket: process.env.GOINVO_COM_BUCKET_NAME,
      Body: '',
      Key: s3Path,
      ContentType: mime.lookup(filePath),
      CacheControl: cacheControl,
    }

    const fileStream = fs.createReadStream(filePath)
    fileStream.on('error', err => {
      console.log('File Error', err)
    })
    params.Body = fileStream

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error', err)
      }
      if (data) {
        console.log('Successfully uploaded: ' + data.Location)
      }
    })
  })
}

const uploadFromDirectory = dir => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      throw err
    }

    files.forEach(file => {
      const filePath = path.join(dir, file)

      fs.stat(filePath, (err, stat) => {
        if (err) {
          throw err
        }

        if (stat.isDirectory()) {
          uploadFromDirectory(filePath)
        } else {
          uploadFile(filePath)
        }
      })
    })
  })
}

const invalidateCloudfront = () => {
  const reference = randomstring.generate(16)
  const cloudfront = new AWS.CloudFront()
  const params = {
    DistributionId: process.env.GOINVO_COM_CLOUDFRONT_DISTRIBUTION_ID,
    InvalidationBatch: {
      CallerReference: reference,
      Paths: {
        Quantity: 1,
        Items: ['/*'],
      },
    },
  }

  cloudfront.createInvalidation(params, (err, data) => {
    if (err) console.log(err, err.stack)
    else console.log(data)
  })
}

uploadFromDirectory(path.join(__dirname + '/public/'))
invalidateCloudfront()
