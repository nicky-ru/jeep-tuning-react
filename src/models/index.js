// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Appointment, Model, Service, Advantage, Uzel, Brand } = initSchema(schema);

export {
  Appointment,
  Model,
  Service,
  Advantage,
  Uzel,
  Brand
};