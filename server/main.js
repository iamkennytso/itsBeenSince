const express = require('express');
const compress = require('compression');

const app = express();
const port = process.env.PORT || 1203;

app.use(express.static(`${__dirname}/../public`));
app.use(compress());
app.listen(port, () => {
  console.log(`Up on ${port}`)
});