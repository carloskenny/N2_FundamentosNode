import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import 'reflect-metadata';

import './database';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.diretory));
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
