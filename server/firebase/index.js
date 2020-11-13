var admin = require('firebase-admin');
var serviceAccount = require('../config/fbServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mern-2c85c.firebaseio.com',
});

module.exports = admin;
