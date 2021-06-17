import 'dotenv/config'
import './config-aliases'
import dotenv from 'dotenv';
import app from './app';
import { ErrorRequestHandler } from 'express';

dotenv.config()

const { port, PORT } = process.env;
const serverPort = port || PORT || 8095;

const errorMiddleware: ErrorRequestHandler = (err,
  _req,
  res,
  _next) => {
  console.error(err)
  res.status(err.httpErrorCode || 500).json(err.message || 'Internal server error')
}
app.listen(serverPort, () => console.log(`server running at port ${serverPort}`));

app.use(errorMiddleware);
