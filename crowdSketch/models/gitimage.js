/**
 * Created by Vikingprime on 4/10/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/imageDB');
var conn = mongoose.connection;

var fs = require('fs');

var Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;

conn.once('open', function () {
    console.log('open');
    var gfs = Grid(conn.db);

    // streaming to gridfs
    //filename to store in mongodb
    var writestream = gfs.createWriteStream({
        filename: 'mongo_file.txt'
    });
    fs.createReadStream('/home/etech/sourcefile.txt').pipe(writestream);

    writestream.on('close', function (file) {
        // do something with `file`
        console.log(file.filename + 'Written To DB');
    });
});