import app from './app';

const cors = require('cors');

const port = 3080;

app.listen(port, () => {
  console.log();
  console.log(`Acess(ctrl+click) http://localhost:${port}`);
  console.log(`Server running on port ${port}`);
});
