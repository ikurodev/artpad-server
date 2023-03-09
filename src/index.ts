import express from 'express';
import bodyParser from 'body-parser';
import routerApi from './api';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routerApi(app);

export default app;
