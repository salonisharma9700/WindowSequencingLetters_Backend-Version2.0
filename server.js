const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const cors = require('cors');

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));


mongoose.connect('mongodb+srv://salonisharma9700:salonijmd@cluster0.pkyznni.mongodb.net/WindowSequencingTAD?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());

app.use( require('./routes/timeroute'));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

