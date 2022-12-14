const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.beforeCreate = functions.region("europe-central2")
    .auth.user().beforeCreate((user) => {
      // Only users of a specific domain can sign up.
      if (user.email.indexOf("pwr.edu.pl") === -1) {
        throw new functions.auth.HttpsError("invalid-argument",
            `Unauthorized email "${user.email}"`);
      }
    });
