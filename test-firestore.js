const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Initialize Firebase Admin with Application Default Credentials
// For local execution, ensure you have set GOOGLE_APPLICATION_CREDENTIALS environment variable.
// E.g., export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-file.json"
// The project has Firestore enabled in Native mode in the Netherlands (europe-west4) region.
initializeApp();

const db = getFirestore();

async function saveTestDocument() {
  try {
    console.log('Connecting to Firestore (Region: europe-west4 / Netherlands)...');
    
    // Create a reference to a 'test_collection' and a new document named 'test_document'
    const docRef = db.collection('test_collection').doc('test_document');
    
    // Set some test data
    await docRef.set({
      message: 'Hello from AntiGravity and GitHub!',
      createdAt: new Date(),
      status: 'Deployment Successful',
      region: 'europe-west4 (Netherlands)'
    });
    
    console.log('Successfully saved test document to Firestore!');
    
  } catch (error) {
    console.error('Error saving document to Firestore:', error);
  }
}

// Run the function
saveTestDocument();
