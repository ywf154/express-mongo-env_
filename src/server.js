const app = require('./app');
// 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
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}/n ${process.env.DB_URL}`);
});
