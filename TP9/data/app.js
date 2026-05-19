const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const secret = process.env.APP_SECRET || "mon_super_secret";

app.get('/', (req, res) => {
  res.json({
    message: "Hello World",
    secret: secret
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});