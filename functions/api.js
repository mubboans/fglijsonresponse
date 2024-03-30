const server = require('serverless-http');

const app = require('../app')
// Define your Cloud Function
exports.handler = server(app);