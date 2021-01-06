import express from 'express';
import { testEnvVariable } from '../settings';
import { indexPageController } from '../controllers';

const indexRouter = express.Router();
indexRouter.get('/', indexPageController);
export default indexRouter;
