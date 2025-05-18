// backend/server.js
const app = require('express')();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
