import { Router } from 'express';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticaded';
import AppointmentsController from '../controllers/AppointmentsController';

const appoitmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appoitmentsRouter.use(ensureAthenticated);

appoitmentsRouter.post('/', appointmentsController.create);

export default appoitmentsRouter;
