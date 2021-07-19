const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.addPremiumAccount = functions.https.onCall((data, context) => {
    // get user and add premium custom claim
    return admin.auth().getUserByEmail(data.email).then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        premium: true
      })
    }).then(() => {
      return {
        message: `Success! ${data.email} account has been made an premium.`
      }
    }).catch(err => {
      return err;
    });
});