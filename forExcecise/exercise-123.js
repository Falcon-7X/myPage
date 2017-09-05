var fs = require('fs');

var jsonfile = require('jsonfile');

var filePath = '../../words-from-the-heart/';

fs.readdir(filePath, function(err, files) {
  if (err) {
    console.log('读取文件失败');
    return;
  } 

  var jsonFiles = [];
  for (var i = 0; i < files.length; i++) {
    //文件名为.json
    if (files[i].includes('.json')) {
      jsonFiles.push(files[i]);
    }
  }
  
  var jsonList = [];
  var errorFiles = [];
  for (var i = 0; i < jsonFiles.length; i++) {
    try {
      var rightContent = jsonfile.readFileSync(filePath + jsonFiles[i]);
      // 此处应当把拿到的所有内容扔到jsonList内
      jsonList.push(rightContent); 
    } catch (error) {
      errorFiles.push(jsonFiles[i]);
    }
    // 写入文件的代码是不是放在这里更好呢？
    var writeRightString = './all_words.json';
    var writeErrorFile = './error_files.json';
    jsonfile.writeFileSync(writeRightString, jsonList);
    jsonfile.writeFileSync(writeErrorFile, errorFiles);
  }
});
