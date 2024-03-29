const server = require('serverless-http');
const app = require('../app'); // Import the Express app instance from app.js

// Define your Cloud Function
exports.api = server(app);