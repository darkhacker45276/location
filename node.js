const express = require('express');
const app = express();
app.use(express.json());

app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log('User location:', latitude, longitude);
  // Yahan location ko database me save kar sakte ho ya kisi ko bhej sakte ho
  res.send('Location received');
});

app.listen(3000, () => console.log('Server running on port 3000'));
