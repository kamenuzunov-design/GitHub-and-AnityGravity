const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Initialize Firebase Admin with Application Default Credentials
// For local execution, ensure you have set GOOGLE_APPLICATION_CREDENTIALS environment variable.
// E.g., export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-file.json"
// The project has Firestore enabled in Native mode in the Netherlands (europe-west4) region.
initializeApp();

const db = getFirestore();

async function addTestUser() {
    try {
        console.log('Connecting to Firestore (Region: europe-west4 / Netherlands)...');

        // Create a reference to a 'test_collection' and a new document named 'user'
        const docRef = db.collection('test_collection').doc('user');

        // Set some test user data
        await docRef.set({
            name: 'AntiGravity User',
            email: 'user@antigravity.test',
            role: 'developer',
            createdAt: new Date(),
            status: 'Active',
            region: 'europe-west4'
        });

        console.log('Successfully saved user document to Firestore!');

    } catch (error) {
        console.error('Error saving user document to Firestore:', error);
        process.exit(1);
    }
}

// Run the function
addTestUser();
