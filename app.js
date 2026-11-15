import express from 'express';
import aiRouter from './routers/aiRouter.js';

// SETUP
const app = express();
const port = process.env.APP_PORT || 3000;

// ROUTING
app.get('/', (req, res) => {
    res.send('AI API HOME') // rotta per la homepage
});
app.use('/ai', aiRouter);

// AVVIO SERVER
app.listen(port, () => {
    console.log('Server avviato su http://localhost:' + port);
    // oppure console.log(`Server avviato su http://localhost:${port}`);
})