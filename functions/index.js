const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

exports.setPremiumAccount = functions.https.onCall((data, context) => {
    // get user and add premium custom claim
    return admin.auth().getUserByEmail(data.email).then(user => {
      return admin.auth().setCustomUserClaims(user.uid, {
        premium: true
      })
    }).then(() => {
      return {
        message: `Success! ${data.email} account is premium now.`
      }
    }).catch(err => {
      return err;
    });
});

exports.handlePayment = functions.https.onCall(({ id, email }) => {
  return id
})