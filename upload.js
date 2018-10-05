const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const s3SDK = require('aws-sdk/clients/s3');
const s3 = new s3SDK();
const bucket = 'www.goinvo.com-2018';

const uploadFile = (filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) { throw err };

    const s3Path = filePath.replace(__dirname + '/public/', '');
    const params = { Bucket: bucket, Body: '', Key: s3Path, ContentType: mime.lookup(filePath) };

    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', (err) => {
      console.log('File Error', err);
    })
    params.Body = fileStream;

    s3.upload(params, (err, data) => {
      if (err) {
        console.log('Error', err);
      } if (data) {
        console.log('Successfully uploaded: ' + data.Location);
      }
    });
  });
}

const uploadFromDirectory = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) { throw err };

    files.forEach(file => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stat) => {
        if (err) { throw err };

        if (stat.isDirectory()) {
          uploadFromDirectory(filePath);
        } else {
          uploadFile(filePath);
        }
      });
    });
  });
}

uploadFromDirectory(path.join(__dirname + '/public/'));
