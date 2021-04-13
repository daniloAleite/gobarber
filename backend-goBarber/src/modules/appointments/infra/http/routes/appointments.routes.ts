import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticaded';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appoitmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appoitmentsRouter.use(ensureAthenticated);

appoitmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);
appoitmentsRouter.get('/me', providerAppointmentsController.index);

export default appoitmentsRouter;
