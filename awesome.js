
'use strict';

var fs = require('fs');
var cityBoundsFilePath = ''

async function readFileAsync(name: string, encoding: string):promise<string> {
  return new Promise(function(resolve, reject) {
    fs.readFile(name, encoding, function(err, data)) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    }
  });
}

type cityInfo = {
  name: string
  bounds: Array<location>
}

type location = {
  lat: string
  lng: string
}

function parseCityBounds(inputTxt: string): Array<cityInfo> {
  var cityInfos = [];

  var lines = inputTxt.trim().split('\n');
  lines.forEach(function (line) {
    
  });

  while (lines.length > 0) {

  }
}

async function reverseGeo() {
  var cityBounds = await readFileAsync(cityBoundsFilePath, 'utf8')


}
