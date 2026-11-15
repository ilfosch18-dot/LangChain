import 'dotenv/config';
import { HumanMessage, AIMessage } from 'langchain';
import { ChatGoogle } from '@langchain/google';

// setup del modello
const model = new ChatGoogle({
    model: 'gemini-3.6-flash',
    apiKey: process.env.GOOGLE_API_KEY
});

// creo un array di messaggi
const messages = [new HumanMessage("Io sono Armando, come va oggi?")];

// richiedo al modello di rispondere usando push per caricare i messaggi in memoria per farli ricordare al chatbot
messages.push(new HumanMessage("A marzo devo andare a sciare in Trentino, puoi verificare se ci sarà neve?"));

// invoco il modello e salvo la risposta
const response = await model.invoke(messages);

// stampo la risposta
console.log(response.content);

