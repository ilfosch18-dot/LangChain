// Importiamo Express, il framework Node.js che abbiamo installato.
import express from 'express';

// Creiamo un Router di Express. express.Router() è un metodo, utilizzato per organizzare e gestire le route separatamente.
const router = express.Router();

// Definiamo una route HTTP di tipo GET.
// La funzione freccia (arrow function) è una callback: viene eseguita quando arriva
router.get('/', (req, res) => {
    // res.send() invia una risposta al client sotto forma di testo.
    res.send('AI data here...');
});

// Esportiamo l'oggetto Router.
export default router;