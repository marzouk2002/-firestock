require('dotenv').config()
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const stripe = require('stripe')(process.env.PV_STR_KEY)
admin.initializeApp();

// Add a Premium Claim to Users
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

// handle Payment via stripe
exports.handlePayment = functions.https.onCall(({ id, email }) => {
  const amount= 1000
  stripe.customers.create({
    email: email,
    source: id
  })
  .then(customer => {
      stripe.charges.create({
          amount,
          description: 'Purchase a EBook',
          currency: 'usd',
          customer: customer.id
      })
  })
  .then(charge => res.render('success'))
})