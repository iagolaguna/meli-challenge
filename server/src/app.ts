import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import Router from './routes';

const app = express();

app.use(cors());
app.use(json())
app.use(urlencoded({ extended: true }))
app.use('/api', cors({
  origin: false
}), Router);

export default app;
