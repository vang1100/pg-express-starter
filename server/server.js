const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const songsRouter = require('./routes/songs.router');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/songs', songsRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
