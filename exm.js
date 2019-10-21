const { createLogger, transports ,format} = require('winston');
const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
),
  transports: [
    new transports.File({  filename: 'file.log' })
    //new winston.transports.Console()
    //new transports.Console()
  ]
});
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => 
{ if (port)  logger.log('info',`Example app listening on port ${port}!`)

  else logger.warn('Not at specified port !!!');
})
var mongo= require('mongodb');
var url = "mongodb://localhost:27017/mydb";
mongo.connect(url, function(err, db) {
    if (err) logger.log('error', 'no db connection: '+err);
    var dbo = db.db("mydatabase");
    logger.log('debug', "127.0.0.1 --- debugging !");
    dbo.collection("students").findOne({name: 'rose'})
    .then(item => {
      logger.log('info', item)
      //console.log(item)
    })
    .catch(err => {
        logger.log('error', 'not found: '+err)
    })  
  });
  





