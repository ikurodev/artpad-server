import express from 'express';

const V1RouterApi = (app) => {
	const V1Router = express.Router();
	app.use('/v1', V1Router);
	V1Router.get('/', (req, res) => {
		console.log('/v1 ok');
	});
};

export default V1RouterApi;
