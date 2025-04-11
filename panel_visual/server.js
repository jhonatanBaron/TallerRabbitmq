const express = require('express');
const basicAuth = require('basic-auth');

const app = express();
app.use(express.json());
const PORT = 3000;

// In-memory store for request counts by client
const requestCounts = {};

// Basic authentication middleware (for demonstration; Traefik also applies basic auth)
const auth = (req, res, next) => {
  const user = basicAuth(req);
  const validUser = 'admin';
  const validPass = 'password';
  if (!user || user.name !== validUser || user.pass !== validPass) {
    res.set('WWW-Authenticate', 'Basic realm="panel_visual"');
    return res.status(401).send('Authentication required.');
  }
  next();
};

//  register a request
app.post('/panel', auth, (req, res) => {
  const serviceId = req.headers['x-service-id'];
  if (!serviceId) {
    return res.status(400).send('Missing X-Service-ID header.');
  }
  requestCounts[serviceId] = (requestCounts[serviceId] || 0) + 1;
  console.log(`Received request from ${serviceId}. Total: ${requestCounts[serviceId]}`);
  res.send(`Request registered for ${serviceId}. Count: ${requestCounts[serviceId]}`);
});

//  the current status
app.get('/panel-status', (req, res) => {
  res.json(requestCounts);
});

app.listen(PORT, () => {
  console.log(`panel_visual listening on port ${PORT}`);
});
