import admin from "firebase-admin";

if (!admin.app.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, //this reference the environment variable
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: "https://nextjs-blog-f614b.firebaseio.com",
  });
}

//export firestore
export default admin.firestore();
