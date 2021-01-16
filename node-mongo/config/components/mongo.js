// const etcdConfig = require('./etcd');
// const common = require('../../config/components/common');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const config = require('../../config/config.json');
const constants = require('../../config/constants');
const { DATABASE_MONGO_PREFIX } = constants;
const ENV = process.env.NODE_ENV || "development";
// const DATABASE_CONFIG_KEY = constants.DATABASE_CONFIG_KEY;

module.exports = {
  bootstrap: () => {
    // let config = common.getValue(DATABASE_CONFIG_KEY, etcdConfig.etcdInstance, {recursive: true}, true);
    const mongodb = config.mongodb[ENV];
    const connectionString = DATABASE_MONGO_PREFIX + /* mongodb.username + ':' + mongodb.password + '@' + */ mongodb.host + ':' + mongodb.port + '/' + mongodb.database; // There was an issue while connecting mongodb with development username and password
    // FOR LOCAL MONGODB CONNECT ONLY, WAS HAVING AUTHORIZATION ISSUE IN LOCALDB
    // const connectionString = 'mongodb://127.0.0.1:27017/gemplex_db';
    mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err, db) => {
      if (err) {
        console.error(err);
        throw new Error('Unable to connect MongoDB');
      }
      console.log(`###### Connected to MongoDB! ######`);
      autoIncrement.initialize(db);
    });
    // TODO: Validate DB Address
  },
  config: null,
};
