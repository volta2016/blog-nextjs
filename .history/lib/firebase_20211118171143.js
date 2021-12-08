import admin from "firebase-admin";

console.log{{
	process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	process.env.FIREBASE_PRIVATE_KEY,
	process.env.FIREBASE_PRIVATE_KEY
}}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, //this reference the environment variable
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      client_email: process.env.FIREBASE_PRIVATE_KEYL,
    }),
    databaseURL: "https://nextjs-blog-f614b.firebaseio.com",
  });
}

//export firestore
export default admin.firestore();
