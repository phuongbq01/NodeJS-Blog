const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    const a = 1;
    const b = 2;

    let c = a + b;
    res.send('Hello World')

} )

app.listen(port, () => console.log(`App is running at http://localhost:${port}`));