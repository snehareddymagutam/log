//main.js
const { createLogger, transports ,format} = require('winston');
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
),
  transports: [
    // - Write all logs error (and below) to `somefile.log`.
    new transports.File({  filename: 'somefile.log' })
    //new winston.transports.Console()
    //new transports.Console()
  ]
});
var mongo= require('mongodb');
var url = "mongodb://localhost:27017/mydb";
mongo.connect(url, function(err, db) {
    if (err) logger.log('error', 'no db connection: '+err);
    var dbo = db.db("mydatabase");
    
    dbo.collection("students").findOne({name: 'sham'})
    .then(item => {
      logger.log('info', item)
      //console.log(item)
    })
    .catch(err => {
        logger.log('error', 'not found: '+err)
    })
         
  });