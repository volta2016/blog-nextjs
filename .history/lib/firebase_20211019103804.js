import admin from "firebase-admin";

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, //this reference the environment variable
			private_key: process.env.FIREBASE_PRIVATE_KEY,
			client_email: process.env.FIREBASE_CLIENT_EMAIL,
		}),
		databaseURL: "https://blog-nextjs-b488e.firebaseio.com",
	});
}

//export firestore
export default admin.firestore();
