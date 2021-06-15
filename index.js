const app = require('./server.js');
const port = process.env.PORT || 3600;
const cors = require('cors');

app.use(cors());
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});