//comments
//logger.js

const winston = require('winston')
module.exports.logger = new winston.Logger({
    transports: [
      //new winston.transports.DailyRotateFile(options.file)
    ],
    // exceptionHandlers: [
    //   new winston.transports.DailyRotateFile(options.file)
    // ],
    exitOnError: false, // do not exit on handled exceptions
  });
  
 
/* 
first require winston
second create logger function
next use this function ( can write to cosole or to a log file to show errors in the file )
at last include this 
*/ 

/* 
first require winston
second create logger function
next use this function ( can write to cosole or to a log file to show errors in the file )
at last include this 
*/ 




