import express from 'express'
import config from './config';

import rolesRoutes from './routes/roles.routes'

const app = express()

let port = 3000;
//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use(rolesRoutes);

export default app