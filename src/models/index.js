// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Advantage, Service, Uzel, Model, Brand } = initSchema(schema);

export {
  Advantage,
  Service,
  Uzel,
  Model,
  Brand
};