//codaisseur template parts
const express = require('express');
const corsMiddleWare = require('cors');
const PORT = 4000;
const app = express();
app.use(corsMiddleWare());
app.use(express.json());


//start listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
