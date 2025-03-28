const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log('Cookies received:', req.cookies);
    res.send(`Cookies received: ${JSON.stringify(req.cookies)}`);
});

app.get('/set-cookie', (req, res) => {
    res.cookie('testCookie', 'helloWorld', { httpOnly: true });
    res.send('Cookie has been set!');
});

app.listen(process.env.PORT || 3000, () => console.log('Server berjalan'));
