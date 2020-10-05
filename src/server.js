import 'dotenv/config';
import express from 'express';

import bullboard from 'bull-board';

import UserControllers  from './app/controllers/UseController';
import Queue from './app/lib/Queue';

const app = express();

bullboard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.use('/queue', bullboard.UI)

app.post('/users', UserControllers.store);

app.listen(process.env.PORT, () => {
  console.log(`API rodando na porta ${process.env.PORT}`)
})
