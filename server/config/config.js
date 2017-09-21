//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://test1:test2@ds127564.mlab.com:27564/cen3031_assign3', //place the URI of your mongo database here.
  }, 
  googleMaps: {
    key: 'AIzaSyA7GWwUdUDTYQYi704o_j7TE2JqhkotwoI'
  },
  port: 80
};