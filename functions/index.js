require('dotenv').config()
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const PV_STR_KEY = "sk_test_51JL7huEtWyVXRbR8ZAPk2EI9MZayptBd5i3VTSLy2CeIPGWRZ953d82RtbT7HfAxuiqUXJJlrRyNJzwRJNgcfOzi00zhdqx1b7"
const PRICE_ID = "price_1JMWkXEtWyVXRbR8PNkbBddf"
const stripe = require('stripe')(PV_STR_KEY)
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
  return stripe.customers.create({
      email: email,
      source: id
    })
    .then(customer => {
        stripe.subscriptions.create({
          customer: customer.id,
          items: [
            { price: PRICE_ID },
          ],
        });
    })
    .then(charge => {
      return {
        message: `Success! Subscription created.`
      }
    })
    .catch(err => err)
})