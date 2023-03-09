import express from 'express';
import V1RouterApi from './v1';

const routerApi = (app) => {
	const APIRouter = express.Router();
	app.use('/api', APIRouter);

	V1RouterApi(APIRouter);

	APIRouter.get('/', (req, res) => {
		console.log('/API ok');
	});
};

export default routerApi;
